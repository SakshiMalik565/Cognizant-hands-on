package com.cognizant.springlearn;

import com.cognizant.springlearn.controller.CountryController;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class SpringLearnApplicationTests {

    @Autowired
    private CountryController countryController;

    @Autowired
    private MockMvc mvc;

    @Test
    public void contextLoads() {
        assertNotNull(countryController);
    }

    @SuppressWarnings("unchecked")
    private String getJwtToken() throws Exception {
        MvcResult result = mvc.perform(get("/authenticate")
                .header("Authorization", "Basic dXNlcjpwd2Q="))
                .andExpect(status().isOk())
                .andReturn();
        String responseString = result.getResponse().getContentAsString();
        Map<String, String> map = new ObjectMapper().readValue(responseString, Map.class);
        return map.get("token");
    }

    @Test
    public void testGetCountry() throws Exception {
        String token = getJwtToken();
        ResultActions actions = mvc.perform(get("/country")
                .header("Authorization", "Bearer " + token));
        actions.andExpect(status().isOk());
        actions.andExpect(jsonPath("$.code").exists());
        actions.andExpect(jsonPath("$.code").value("IN"));
        actions.andExpect(jsonPath("$.name").exists());
        actions.andExpect(jsonPath("$.name").value("India"));
    }

    @Test
    public void testGetCountryException() throws Exception {
        String token = getJwtToken();
        ResultActions actions = mvc.perform(get("/countries/az")
                .header("Authorization", "Bearer " + token));
        actions.andExpect(status().isNotFound());
        actions.andExpect(status().reason("Country not found"));
    }
}
