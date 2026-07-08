package com.cognizant.junit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AaaPatternTest {
    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        calculator = null;
    }

    @Test
    public void testAdd() {
        // Act
        int result = calculator.add(10, 20);

        // Assert
        assertEquals(30, result);
    }
}
