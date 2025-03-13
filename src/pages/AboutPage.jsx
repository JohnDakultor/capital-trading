import React from 'react';
import Header from '../components/Header';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
    return (
        <div>
            <Header />
            <Container sx={{ mt: 5 }}>
                <Typography variant="h3" align="center" gutterBottom>
                    About Capital Trading
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    Your Secure Capital Trading Payment Platform
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="body1" paragraph>
                        Capital Trading is a leading digital payment platform specializing in capital market transactions. Our system provides a secure, efficient environment for managing trading payments and withdrawals, serving institutional and individual investors worldwide. We combine cutting-edge technology with robust financial infrastructure to ensure seamless transaction processing.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        As a trusted payment gateway for capital markets, we maintain the highest standards of security and compliance. Our platform features real-time transaction monitoring, multi-layer encryption, and automated reconciliation processes. The Capital Trading Price Benchmark ensures fair valuation for all transactions, providing transparency for both buyers and sellers.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        In today's fast-paced financial markets, having reliable payment infrastructure is crucial. Our platform enables instant fund transfers, supports multiple currencies, and integrates with major trading systems. Whether you're executing high-frequency trades or managing long-term investments, Capital Trading provides the payment solutions you need.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We've revolutionized capital market payments by eliminating traditional barriers. With our digital platform, you can manage all transaction aspects securely from any device, without physical documentation or bank visits. Our API-first approach allows seamless integration with your existing trading infrastructure.
                    </Typography>

                    <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
                        Our Vision
                    </Typography>
                    <Typography variant="body1" paragraph>
                        To redefine global capital market payments through innovation and technological excellence. We aim to create the world's most trusted payment infrastructure for financial markets, where transactions are instantaneous, secure, and accessible to all market participants.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        "To be the payment platform of choice for capital markets worldwide" - this vision drives our continuous development of advanced features like AI-powered fraud detection, blockchain settlement systems, and predictive liquidity management tools.
                    </Typography>

                    <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
                        Our Mission
                    </Typography>
                    <Typography variant="body1" paragraph>
                        1. Provide institutional-grade payment solutions to traders of all sizes<br />
                        2. Maintain the highest security standards in financial transactions<br />
                        3. Simplify complex capital market payments through automation<br />
                        4. Enable real-time global fund movement 24/7/365<br />
                        5. Drive innovation in transaction processing and settlement systems
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                        Join thousands of traders who trust Capital Trading for their payment needs. Experience faster settlements, enhanced security, and complete financial visibility. Our platform integrates with leading trading systems while providing powerful analytics tools to optimize your capital flow and transaction management.
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}