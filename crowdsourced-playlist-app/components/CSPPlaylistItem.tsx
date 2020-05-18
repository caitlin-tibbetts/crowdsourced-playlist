import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { CSPStyles } from '../CSPStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { API, graphqlOperation } from 'aws-amplify';
import { updateSong, deleteSong } from '../src/graphql/mutations';

export default function CSPPlaylistItem({ songID, title, artist, initialUpvotes, initialDownvotes }) {
    const [upvotes, setUpvotes] = useState(initialUpvotes)
    const [downvotes, setDownvotes] = useState(initialDownvotes)

    const [upvoteDisabled, setUpvoteDisabled] = useState(true)
    const [downvoteDisabled, setDownvoteDisabled] = useState(true)

    async function upvote() {
        const song = { id: songID, upvotes: upvotes }
        await API.graphql(graphqlOperation(updateSong, { input: song }))

    }

    async function downvote() {
        const song = { id: songID, downvotes: downvotes }
        if ((upvotes * 2) < downvotes) {
            await API.graphql(graphqlOperation(deleteSong, { input: song }))
        } else await API.graphql(graphqlOperation(updateSong, { input: song }))
    }

    return (
        <View style={CSPStyles.promptBox}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                setUpvotes(upvotes + 1)
                upvote()
                setUpvoteDisabled(true)
                setDownvoteDisabled(true)
            }} 
            disabled={upvoteDisabled}
            style={styles.upVoteButton}>
                <Icon name="thumbs-up" size={30} />
                <Text>{upvotes}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setDownvotes(downvotes + 1)
                downvote()
                setUpvoteDisabled(true)
                setDownvoteDisabled(true)
            }} 
            disabled={downvoteDisabled}
            style={styles.downVoteButton}>
                <Icon name="thumbs-down" size={30} />
                <Text>{downvotes}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#E5F4E3',
        fontFamily: 'montserrat-regular'
    },
    artist: {
        fontSize: 15,
        color: '#E5F4E3',
        fontFamily: 'montserrat-regular'
    },
    upVoteButton: {
        marginStart: 20,
        color: '#E5F4E3',
        marginEnd: 10
    },
    downVoteButton: {
        marginEnd: 10,
        color: '#E5F4E3',
    }
})
