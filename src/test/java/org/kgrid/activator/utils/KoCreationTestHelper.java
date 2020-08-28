package org.kgrid.activator.utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import org.kgrid.shelf.domain.ArkId;
import org.kgrid.shelf.domain.KoFields;

import java.io.IOException;

public class KoCreationTestHelper {
    public static final String SERVICE_YAML_PATH = "service.yaml";
    public static final String DEPLOYMENT_YAML_PATH = "deployment.yaml";
    public static final String NAAN = "naan";
    public static final String NAME = "name";
    public static final String VERSION = "version";
    public static final String KO_PATH = NAAN + "-" + NAME + "-" + VERSION;
    public static final ArkId ARK_ID = new ArkId(NAAN, NAME, VERSION);
    public static final String ARTIFACT_PATH = "dist/main.js";
    public static final String ADAPTER = "V8";
    public static final String FUNCTION_NAME = "welcome";
    public static final String ENDPOINT_NAME = "/" + FUNCTION_NAME;
    public static final byte[] DEPLOYMENT_BYTES =
            ("endpoints:\n" +
                    "  " + ENDPOINT_NAME + ":\n" +
                    "    adapter: " + ADAPTER + "\n" +
                    "    artifact: " + ARTIFACT_PATH + "\n" +
                    "    function: " + FUNCTION_NAME)
                    .getBytes();

    public static JsonNode generateMetadata(
            String serviceYamlPath,
            String deploymentYamlPath,
            boolean hasAtId,
            boolean hasIdentifier,
            boolean hasVersion,
            boolean hasType) {
        ObjectNode metadata = new ObjectMapper().createObjectNode();
        if (hasAtId) {
            metadata.put("@id", KO_PATH);
        }
        if (hasType) {
            metadata.put("@type", "koio:KnowledgeObject");
        }
        if (hasIdentifier) {
            metadata.put("identifier", ARK_ID.toString());
        }
        if (hasVersion) {
            metadata.put(KoFields.VERSION.asStr(), VERSION);
        }
        if (deploymentYamlPath != null) {
            metadata.put(KoFields.DEPLOYMENT_SPEC_TERM.asStr(), deploymentYamlPath);
        }
        if (serviceYamlPath != null) {
            metadata.put(KoFields.SERVICE_SPEC_TERM.asStr(), serviceYamlPath);
        }
        return metadata;
    }

    public static JsonNode generateMetadata() {
        return generateMetadata(SERVICE_YAML_PATH, DEPLOYMENT_YAML_PATH, true, true, true, true);
    }

    public static JsonNode getEndpointDeploymentJson() throws IOException {
        return new YAMLMapper().readTree(KoCreationTestHelper.DEPLOYMENT_BYTES).get("endpoints").get(ENDPOINT_NAME);
    }
}
