import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import img from '../img/background7.jpeg';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <Grid stackable columns={3} textAlign='left'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            This is an illustration of an authentication system based on blockchain technology. In this system, user login information isn't stored in a traditional database; instead, the login data is hashed and stored within a smart contract on the blockchain.
                            To authenticate, users are required to have an Ethereum address, a username, a password, and a four-digit code. Authentication can only take place when the user is connected to the blockchain because the web3 sign method is utilized to create a cryptographic signature. This signature is essential for generating the hash of the user's login data.
                        </Grid.Column>
                        <Grid.Column width={1}>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Image src={img} alt='image' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Home;
