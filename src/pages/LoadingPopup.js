import React from 'react';
import { Dialog, DialogContent, CircularProgress, Typography, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const LoadingPopup = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} >
            <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background : '#efefef',
                    borderRadius: '50%'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        width: 120,
                        height: 120,
                    }}
                >
                    {/* 3D Border Animation */}
                    <Box
                        sx={{
                            position: 'absolute',
                            border: '8px solid #273746',
                            borderRadius: '50%',
                            width: '100%',
                            height: '100%',
                            borderTopColor: '#efefef', // Change the color as needed
                            animation: 'spin 1.5s linear infinite',
                            backgroundColor: 'transparent', // Ensure the background is transparent
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                        }}
                    >
                        <CodeIcon sx={{ fontSize: 48, color: '#273746' }} />
                    </Box>
                </Box>
            </DialogContent>

            {/* CSS Animation */}
            <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                `}
            </style>
        </Dialog>
    );
};

export default LoadingPopup;
