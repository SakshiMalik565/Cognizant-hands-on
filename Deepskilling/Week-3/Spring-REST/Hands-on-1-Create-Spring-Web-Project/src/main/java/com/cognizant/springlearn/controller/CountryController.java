package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger logger = LoggerFactory.getLogger(CountryController.class);

    @GetMapping("/country")
    public Country getCountry() {
        logger.info("Request received for endpoint: /country");
        Country country = new Country("IN", "India");
        logger.info("Country object returned: {}", country);
        return country;
    }
}
