package com.cognizant.controller;

import com.cognizant.model.Country;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountry() {
        return new Country("IN","India");
    }

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {

        if(code.equalsIgnoreCase("IN"))
            return new Country("IN","India");

        return new Country(code,"Unknown");
    }

}