package org.kgrid.activator.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.kgrid.activator.exceptions.ActivatorException;
import org.kgrid.activator.services.ActivationService;
import org.kgrid.activator.services.Endpoint;
import org.kgrid.adapter.api.AdapterException;
import org.kgrid.shelf.domain.KnowledgeObjectWrapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.test.util.ReflectionTestUtils;

import java.net.URI;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.kgrid.activator.utils.KoCreationTestHelper.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class EndpointControllerTest {
    @Mock
    private ActivationService activationService;
    @Mock
    private Map<URI, Endpoint> endpoints;
    @InjectMocks
    EndpointController endpointController;
    private KnowledgeObjectWrapper kow;
    private Endpoint endpoint;
    private HttpHeaders headers;

    @Before
    public void setup() {
        ReflectionTestUtils.setField(endpointController, "shelfRoot", "kos");
        headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        kow = new KnowledgeObjectWrapper(generateMetadata(NAAN, NAME, VERSION));
        kow.addService(generateServiceNode());
        kow.addDeployment(getEndpointDeploymentJsonForEngine(JS_ENGINE, ENDPOINT_NAME));
        endpoint = new Endpoint(kow, ENDPOINT_NAME);
        when(endpoints.get(endpoint.getId())).thenReturn(endpoint);
    }

    @Test
    public void testFindEndpointOldVersionReturnsEndpointResource() {
        EndpointResource endpointResource =
                endpointController.findEndpointOldVersion(NAAN, NAME, API_VERSION, ENDPOINT_NAME);
        assertEquals(createEndpointResource(endpoint), endpointResource);
    }

    @Test
    public void testFindEndpointOldVersionThrowsActivatorExceptionIfNoEndpointFound() {
        when(endpoints.get(endpoint.getId())).thenReturn(null);
        ActivatorException activatorException = Assert.assertThrows(ActivatorException.class,
                () -> {
                    endpointController.findEndpointOldVersion(NAAN, NAME, API_VERSION, ENDPOINT_NAME);
                });
        assertEquals(String.format("Cannot find endpoint with id %s/%s/%s/%s", NAAN, NAME, API_VERSION, ENDPOINT_NAME),
                activatorException.getMessage());
    }

    @Test
    public void testFindEndpointReturnsEndpointResource() {
        EndpointResource endpointResource = endpointController.findEndpoint(NAAN, NAME, ENDPOINT_NAME, API_VERSION);
        assertEquals(createEndpointResource(endpoint), endpointResource);
    }

    @Test
    public void testFindEndpointReturnsEndpointResourceWithErrorStatusForBadEndpoint() {
        ObjectNode dumbNode = new ObjectMapper().createObjectNode();
        dumbNode.put("trash", "also trash");
        kow.addService(dumbNode);
        kow.addDeployment(dumbNode);
        endpoint = new Endpoint(kow, ENDPOINT_NAME);
        endpoints.replace(endpoint.getId(), endpoint);
        EndpointResource endpointResource = endpointController.findEndpoint(NAAN, NAME, ENDPOINT_NAME, API_VERSION);
        assertEquals(String.format("Could not create endpoint resource for malformed endpoint: %s/%s/%s",
                NAAN, NAME, VERSION), endpointResource.getStatus());
    }

    @Test
    public void testFindEndpointOldVersionReturnsEndpointResourceWithErrorStatusForBadEndpoint() {
        ObjectNode dumbNode = new ObjectMapper().createObjectNode();
        dumbNode.put("trash", "also trash");
        kow.addService(dumbNode);
        kow.addDeployment(dumbNode);
        endpoint = new Endpoint(kow, ENDPOINT_NAME);
        endpoints.replace(endpoint.getId(), endpoint);
        EndpointResource endpointResource =
                endpointController.findEndpointOldVersion(NAAN, NAME, API_VERSION, ENDPOINT_NAME);
        assertEquals(String.format("Could not create endpoint resource for malformed endpoint: %s/%s/%s",
                NAAN, NAME, VERSION), endpointResource.getStatus());
    }

    @Test
    public void testFindEndpointThrowsActivatorExceptionIfNoEndpointFound() {
        when(endpoints.get(endpoint.getId())).thenReturn(null);
        ActivatorException activatorException = Assert.assertThrows(ActivatorException.class,
                () -> {
                    endpointController.findEndpoint(NAAN, NAME, ENDPOINT_NAME, API_VERSION);
                });
        assertEquals(String.format("Cannot find endpoint with id %s/%s/%s/%s", NAAN, NAME, API_VERSION, ENDPOINT_NAME),
                activatorException.getMessage());
    }

    @Test
    public void testExecuteEndpointOldVersionCallsExecuteOnActivationService() {
        String inputs = "inputs";
        endpointController.executeEndpointOldVersion(NAAN, NAME, API_VERSION, ENDPOINT_NAME, inputs, headers);
        verify(activationService).execute(endpoint.getId(), inputs, HttpMethod.POST, headers.getContentType());
    }

    @Test
    public void testExecuteEndpointOldVersionThrowsIfActivationServiceThrows() {
        String inputs = "inputs";
        String adapterExceptionMessage = "Blammo";
        when(activationService.execute(endpoint.getId(), inputs, HttpMethod.POST, headers.getContentType()))
                .thenThrow(new AdapterException(adapterExceptionMessage));

        AdapterException adapterException = Assert.assertThrows(AdapterException.class,
                () -> {
                    endpointController.executeEndpointOldVersion(NAAN, NAME, API_VERSION, ENDPOINT_NAME, inputs, headers);
                });
        assertEquals(adapterExceptionMessage, adapterException.getMessage());
    }

    @Test
    public void testExecuteEndpointCallsExecuteOnActivationService() {
        String inputs = "inputs";
        endpointController.executeEndpoint(NAAN, NAME, API_VERSION, ENDPOINT_NAME, inputs, headers);
        verify(activationService).execute(endpoint.getId(), inputs, HttpMethod.POST, headers.getContentType());
    }

    @Test
    public void testExecuteEndpointThrowsIfActivationServiceThrows() {
        String inputs = "inputs";
        String adapterExceptionMessage = "Blammo";
        when(activationService.execute(endpoint.getId(), inputs, HttpMethod.POST, headers.getContentType()))
                .thenThrow(new AdapterException(adapterExceptionMessage));

        AdapterException myException = Assert.assertThrows(AdapterException.class,
                () -> {
                    endpointController.executeEndpoint(NAAN, NAME, API_VERSION, ENDPOINT_NAME, inputs, headers);
                });
        assertEquals(adapterExceptionMessage, myException.getMessage());
    }

    private EndpointResource createEndpointResource(Endpoint endpoint) {
        EndpointResource resource = new EndpointResource(endpoint, "kos");

        return resource;
    }
}
