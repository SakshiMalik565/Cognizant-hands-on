package com.cognizant.factory;

public class DocumentFactory {
    public static Document createDocument(String type) {
        if (type == null) {
            return null;
        }
        if (type.equalsIgnoreCase("word")) {
            return new WordDocument();
        } else if (type.equalsIgnoreCase("pdf")) {
            return new PdfDocument();
        } else if (type.equalsIgnoreCase("excel")) {
            return new ExcelDocument();
        }
        return null;
    }
}
