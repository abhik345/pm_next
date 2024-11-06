"use client";
import { useState, useEffect } from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Head from "next/head";

const Newpdf = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPdf = async () => {
            try {
                const response = await fetch("/SRKxPramodMalooNew.pdf");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const blob = await response.blob();
                const fileUrl = URL.createObjectURL(blob);
                setPdfFile(fileUrl);
            } catch (error) {
                setError(error);
                console.error('Error loading PDF:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPdf();

        return () => {
            if (pdfFile) {
                URL.revokeObjectURL(pdfFile);
            }
        };
    }, []);

    return (
        <>
            <Head>
                <title>Stars come and go... But SRK comes once</title>
                <meta property="og:title" content="Stars come and go... But SRK comes once" />
                <meta property="og:description" content="Stars come and go... But SRK comes once, Happens once & Stays Forever!" />
                <meta property="og:image" content="/srk.png" />
                <meta property="og:url" content="/SRKxPramodMalooNew.pdf" />
                <meta property="og:type" content="website" />
            </Head>

            <div style={{ height: "100vh" }}>
                {loading ? (
                    <p>Loading PDF...</p>
                ) : error ? (
                    <p>Error loading PDF: {error.message}</p>
                ) : (
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={pdfFile} />
                    </Worker>
                )}
            </div>
        </>
    );
};

export default Newpdf;
