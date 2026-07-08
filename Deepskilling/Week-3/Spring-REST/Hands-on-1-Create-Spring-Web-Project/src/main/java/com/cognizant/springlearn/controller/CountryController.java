package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@RestController
public class CountryController {

    private static final Logger logger = LoggerFactory.getLogger(CountryController.class);
    private static final Map<String, Country> countries = new HashMap<>();

    static {
        countries.put("IN", new Country("IN", "India"));
        countries.put("US", new Country("US", "United States"));
        countries.put("JP", new Country("JP", "Japan"));
        countries.put("DE", new Country("DE", "Germany"));
    }

    @GetMapping("/country")
    public Country getCountry() {
        logger.info("Request received for endpoint: /country");
        Country country = countries.get("IN");
        logger.info("Country object returned: {}", country);
        return country;
    }

    @GetMapping("/country/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        logger.info("Incoming request for country code: {}", code);
        Country country = countries.get(code.toUpperCase());
        if (country == null) {
            logger.warn("Invalid country code request: {}", code);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Country not found");
        }
        logger.info("Country returned: {}", country);
        return country;
    }
}

