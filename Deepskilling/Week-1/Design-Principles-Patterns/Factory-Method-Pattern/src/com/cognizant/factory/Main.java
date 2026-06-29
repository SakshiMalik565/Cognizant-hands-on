package com.cognizant.factory;

public class Main {
    public static void main(String[] args) {
        Document word = DocumentFactory.createDocument("word");
        Document pdf = DocumentFactory.createDocument("pdf");
        Document excel = DocumentFactory.createDocument("excel");

        if (word != null) {
            word.open();
        }

        if (pdf != null) {
            pdf.open();
        }

        if (excel != null) {
            excel.open();
        }

        Document ppt = DocumentFactory.createDocument("powerpoint");
        if (ppt != null) {
            ppt.open();
        } else {
            System.out.println("Invalid document type");
        }
    }
}
