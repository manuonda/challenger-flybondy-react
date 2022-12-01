import React, { useEffect } from 'react';
import { Flight } from '../../../types/type';
import { ArrowForwardIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";
  import { Text, Box, Center, Container, Grid, VStack } from '@chakra-ui/react'
import api from '../../../api';

export interface HomePageInterface {}


const HomePage : React.FC<HomePageInterface> = () => {
   const[origins,setOrigins] = React.useState<Flight["origin"][]>([]);

	useEffect(() => {
         const cargarData = async() =>  {
           try {
			  const data =  await api.origins.list();
		       setOrigins(data);
			} catch (error) { 
			 console.error(error);
		   }
		}

		cargarData();

		
	},[]);

	return (
		<>
		<Router>
	     <Container centerContent>
			<Box>
				<Text fontSize={50}>Flybondy</Text>
			</Box>
			<VStack>
			<Center bg="tomato">
			<Grid templateColumns="repeat(5,1fr)">
			{ origins && origins.map((origin)=>(
			   <Link key={origin} to={`/${origin}`}>
               {origin}    
			   <ArrowForwardIcon></ArrowForwardIcon>
			   </Link> 
			   
		      ))
		      }	
			</Grid>
		    
		 </Center>
			</VStack>
		
		 </Container>
	     		
		</Router>
		 
		</>
	);
};

export default HomePage;
