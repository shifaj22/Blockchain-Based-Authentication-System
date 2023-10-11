import React, { Component } from 'react';
import { Card, Grid, Message, Image } from 'semantic-ui-react';
import '../App.css';

class UserAccount extends Component {

    render() {
        return (
            <div className='user-account'>
                <Grid centered stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Card fluid>
                                <Image
                                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                    wrapped ui={false}
                                />
                                <Card.Content>
                                    <Card.Header>{this.props.username}</Card.Header>
                                    <Card.Meta>
                                        <span>user</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <strong>
                                            {
                                                this.props.username.charAt(0).toUpperCase() +
                                                this.props.username.toLowerCase().slice(1)
                                            }
                                        </strong> <br></br>
                                        Occupation : Blockchain Developer | Blockchain Writer <br></br>
                                        DoB        : 22 2000 <br></br>
                                        Age        : 22 <br></br>
                                        City       : Belgaum <br></br>
                                        State      : Karnataka <br></br>
                                        Country    : India <br></br>
                                        
                            
                                        <br></br>
                                        <a href='https://www.linkedin.com/in/sheefajalali/' target='blank'>
                                            LinkedIn Profile
                                        </a>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Message size='mini'>
                                        {this.props.account.toLowerCase()}
                                    </Message>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        );
    }
}

export default UserAccount;
