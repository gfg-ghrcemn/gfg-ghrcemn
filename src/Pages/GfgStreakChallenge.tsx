import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const GfgStreakChallenge: React.FC = () => {
    return (
        <div className='bg-black flex h-full'>
            <Container>
                <h1 className='text-white text-4xl font-extrabold text-center mt-4'>GFG Streak Challenge</h1>
                <h2 className='text-white text-2xl font-bold text-center mt-2'>Join us for an 11-day Problem of the Day (POTD) Streak Challenge on GeeksforGeeks!</h2>
                <h5 className='text-white text-lg font-bold text-center mt-2'>21 November 2024</h5>
                <img src="/Men win competitions.png" alt="GFG Streak Challenge" className='w-full h-96 object-cover mt-4' />
                <Box sx={{ mt: 2 }}>
                    <h3 className='text-white text-xl font-bold'>How to Participate:</h3>
                    <List className='text-white'>
                        <ListItem>
                            1. Solve the daily POTD on GeeksforGeeks and take a screenshot.
                        </ListItem>
                        <ListItem>
                            2. Share your learnings with the screenshot on LinkedIn.
                        </ListItem>
                        <ListItem>
                            3. Use hashtag: #GFGSTREAK and tag our official GFG account.
                        </ListItem>
                        <ListItem>
                            4. After 11 days, post about your experience and key takeaways.
                        </ListItem>
                        <ListItem>
                            5. Fill out the Google Form (shared at the end of 11 days) with username and screenshot of streak.
                        </ListItem>
                        <ListItem>
                            6. Verification will ensure eligibility for rewards.
                        </ListItem>
                    </List>
                    <List className='text-white'>
                        <h2 className='text-white text-xl font-bold'>Rewards:</h2>
                        <ListItem>
                            - Top 5 participants: Exciting goodies!
                        </ListItem>
                        <ListItem>
                            - All participants: Certificate to showcase on social media (LinkedIn)
                        </ListItem>
                    </List>
                    <List className='text-white'>
                        <h2 className='text-white text-xl font-bold'>Objective:</h2>
                        <ListItem>
                            Improve problem-solving skills, consistency, and community engagement.
                        </ListItem>
                    </List>
                    <List className='text-white'>
                        <h2 className='text-white text-xl font-bold'>Duration:</h2>
                        <ListItem>
                            11 consecutive days
                        </ListItem>
                    </List>
                    <List className='text-white'>
                        <h2 className='text-white text-xl font-bold'>Eligibility:</h2>
                        <ListItem>
                            Open to all ghrcem student
                        </ListItem>
                    </List>
                    <div className='flex flex-col mb-5 w-full justify-between gap-5'>
                    <div className='flex justify-center'>
                        <Link to='/register' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'>Register Now</Link>
                    </div>
                    <div className='flex justify-center'>
                        <hr className='w-1/2 border-green-500 border-2' />
                    </div>
                    <div className='flex justify-start'>
                        <Link to='/events' className='border-green-500 border-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'>&lt; events</Link>
                    </div>

                    </div>

                </Box>
            </Container>
        </div>

    );
};

export default GfgStreakChallenge;