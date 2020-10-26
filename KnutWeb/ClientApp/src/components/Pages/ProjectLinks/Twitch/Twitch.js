import React, { useState } from 'react';
import styled from 'styled-components';
import { TwitchChat, TwitchPlayer } from 'react-twitch-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const StreamWrapper = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const StreamerTitle = styled('h2')`
    margin-top: 10px;
    text-transform: capitalize;
`;
const AddButtonWrapper = styled('div')`
    display:flex;
    justify-content: center;
    input {
        width: 300px;
        margin-right: 5px;
    }
`;
const DeleteButton = styled('div')`
    margin-left: 10px;
    height: 45px;
    transition: transform 1s;
    &:hover {
        transform: rotate(180deg);
        color: lightgrey;
    }
    a:hover {
        cursor: pointer;
    }
`;

export const Twitch = () => {
    let favStreamers = [{channel: 'quin69', id: 'quin69'}, {channel: 'pokelawls', id: 'pokelawls'}];
    const [list, setList] = useState(favStreamers);
    const [channel, setChannel] = useState('');

    function handleChange(event) {
        setChannel(event.target.value);
    }
    function handleAdd() {
        const newFavStreamers = list.concat({ channel });

        setList(newFavStreamers);

        setChannel('');
    }
    function handleRemove(channel, key) {

        var elem = document.getElementById(channel + 'wrapper' + key);
        elem.parentNode.removeChild(elem);

        //const newList = list.filter((item) => item.channel !== channel);
        //setList(newList);
    }

    return (
        <div className='wrapper'>
            {list.map((x, key) => {
                return (
                    <div id={x.channel + 'wrapper' + key} key={key}>
                        <StreamerTitle>{x.channel}</StreamerTitle>
                        <StreamWrapper key={key}>

                            <TwitchPlayer
                                channel={x.channel}
                                id={x.channel + key}
                                muted
                                autoplay={false}
                                width='100%'
                                height={600}
                            />
                            <TwitchChat
                                channel={x.channel}
                                id={x.channel + 'chat' + key}
                                theme='dark'
                                width='60%'
                                height={600}
                            />
                            <DeleteButton className="delete-button">
                                <a onClick={() => handleRemove(x.channel, key)}><FontAwesomeIcon icon={faTimes} /></a>
                            </DeleteButton>
                        </StreamWrapper>
                    </div>
                )
            })}
            <div>
                <h2>Add another stream</h2>
                <AddButtonWrapper>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter channel name" value={channel} onChange={handleChange} />
                            <button type="button" className='btn btn-dark' onClick={handleAdd} disabled={!channel}>
                                Add
                            </button>
                        </div>

                    </form>
                </AddButtonWrapper>
            </div>

        </div>
    );
}