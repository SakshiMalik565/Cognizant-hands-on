package com.cognizant.junit;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        int result = calc.add(10, 5);
        assertEquals(15, result);
    }

    @Test
    public void testSubtract() {
        Calculator calc = new Calculator();
        int result = calc.subtract(10, 5);
        assertEquals(5, result);
    }

    @Test
    public void testMultiply() {
        Calculator calc = new Calculator();
        int result = calc.multiply(6, 4);
        assertEquals(24, result);
    }

    @Test
    public void testDivide() {
        Calculator calc = new Calculator();
        double result = calc.divide(20.0, 4.0);
        assertEquals(5.0, result, 0.0001);
    }
}
