package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    @SuppressWarnings("unchecked")
    public Country getCountry(String code) throws CountryNotFoundException {
        LOGGER.info("START getCountry: {}", code);
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries = (List<Country>) context.getBean("countryList", List.class);

        Country match = countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

        if (match == null) {
            LOGGER.warn("Country not found: {}", code);
            throw new CountryNotFoundException("Country not found");
        }

        LOGGER.info("END getCountry: {}", match);
        return match;
    }
}
