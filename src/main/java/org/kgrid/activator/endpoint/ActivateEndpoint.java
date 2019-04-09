package org.kgrid.activator.endpoint;


import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.util.Map;
import org.kgrid.activator.EndpointLoader;
import org.kgrid.activator.services.ActivationService;
import org.kgrid.shelf.domain.ArkId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.stereotype.Component;

/**
 * Activate Endpoint allows re-activation if the entire shell or a particular knowledge object.
 */
@Component
@Endpoint(id = "activate")
public class ActivateEndpoint {

  private final Logger log = LoggerFactory.getLogger(this.getClass());

  @Autowired
  private ActivationService activationService;

  @Autowired
  private EndpointLoader endpointLoader;

  @Autowired
  private Map<String, org.kgrid.activator.services.Endpoint> endpoints;


  /**
   * Remove all endpoints and load and activate
   *
   * @return set of activated endpoint paths
   */
  @ReadOperation
  public String activate() {

    log.info("Load and Activate all endpoints ");

    endpoints.clear();
    endpoints.putAll(endpointLoader.load());
    activationService.activate(endpoints);

    JsonArray joArray = getJsonElements();

    return joArray.toString();
  }

  /**
   * For A KO remove endpoints, load endpoints, and activate those endpoints
   *
   * @param naan ko naan
   * @param name ko name
   * @return set of activated endpoint paths
   */
  @ReadOperation
  public String activateKO(@Selector String naan,
      @Selector String name) {

    ArkId arkId = new ArkId(naan, name);
    log.info("Activate {}", arkId.getSlashArk());
    actitvate(arkId);

    JsonArray joArray = getJsonElements();

    return joArray.toString();
  }


  /**
   * For an Implementation Remove endpoints, Load endpoints, and activate those endpoints
   *
   * @param naan
   * @param name
   * @param implementation
   * @return
   */
  @ReadOperation
  public String activateKOImplementation(@Selector String naan,
      @Selector String name, @Selector String implementation) {

    ArkId arkId = new ArkId(naan, name,implementation);
    log.info("Activate {}", arkId.getSlashArkImplementation());
    actitvate(arkId);

    JsonArray joArray = getJsonElements();

    return joArray.toString();
  }

  /**
   * Removes and loads endpoints based on ark id, than activates and returns those new
   * activated endpoints the the endpoints context of the activator
   *
   * @param arkId
   */
  public void actitvate(ArkId arkId) {

    if (arkId.isImplementation()){
      endpoints.entrySet().removeIf(
          e -> e.getKey().startsWith(arkId.getDashArkImplementation()));
    } else {
      endpoints.entrySet().removeIf(
          e -> e.getKey().startsWith(arkId.getDashArk()));
    }

    Map<String, org.kgrid.activator.services.Endpoint>
        loadedEndpoints = endpointLoader.load(arkId);

    activationService.activate(loadedEndpoints);

    endpoints.putAll(loadedEndpoints);
  }

  /**
   * Creates json object array of endpoints to display
   * @return
   */
  private JsonArray getJsonElements() {
    JsonArray joArray = new JsonArray();

    endpoints.values().forEach(endpoint ->{
      JsonObject joEndpoint = new JsonObject();
      joEndpoint.addProperty("path", "/"+endpoint.getPath());
      joEndpoint.addProperty("activated", endpoint.getActivated().toString());
      joArray.add(joEndpoint);
    }); return joArray;
  }

}