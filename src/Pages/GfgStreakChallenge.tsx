import React, { lazy } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const GfgStreakChallenge: React.FC = () => {
    scroll(0, 0)
    return (
        <Fade direction='up' triggerOnce >
        <div className='bg-black flex h-full'>
            
            <Container>
                <h1 className='text-white text-4xl font-extrabold text-center mt-4'>GFG Streak Challenge</h1>
                <h2 className='text-white text-2xl font-bold text-center mt-2'>Join us for an 11-day Problem of the Day (POTD) Streak Challenge on GeeksforGeeks!</h2>
                <h5 className='text-white text-lg font-bold text-center mt-2'>21 to 26 October 2024</h5>
                <img loading='lazy' src="https://res.cloudinary.com/dmy2vzkgj/image/upload/v1728796248/team/men%20win%20competitions.png" alt="GFG Streak Challenge" className='w-full h-96 object-cover mt-4' />
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
                        <h2 className='text-white text-xl font-bold'>Note:</h2>
                        <ListItem>                           
                         * The Geek Streak Challenge starts on 21st October 2024. You must begin your streak between the 21st and 26th of October to be eligible, so make sure to start on time!
                        </ListItem>
                        <ListItem>
                        * The final winners of the #GEEKSTREAK2024 event will be announced based on the quality of the write up that you will submit on the 11th day of the event. 
                        </ListItem>
                        <ListItem>
                        * The GeeksforGeeks team and its representatives reserve the right to make the final decision regarding rewards and the final rankings or participation status of each user.
                        </ListItem>
                        <ListItem>
                        * The final write up will have to be posted on your LinkedIn Profiles only to be considered for the reward.
                        </ListItem>
                        <ListItem>
                        * Limited rewards only.
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
                           Starting from 21 - 26 October for 11 consecutive days.
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
                        <Link to='https://lu.ma/event/evt-iUJ5lDXJA0NLXk9' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'>Register</Link>
                    </div>
                    <div className='flex justify-center'>
                        <hr className='w-full border-green-500 border-1 shadow-green-500 shadow-lg' />
                    </div>
                    <div className='flex justify-start'>
                        <Link to='/events' className='border-green-500 border-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'>&lt; events</Link>
                    </div>

                    </div>

                </Box>
            </Container>
        </div>
            </Fade>

    );
};

export default GfgStreakChallenge;