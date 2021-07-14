// State Management store - Provides state variables and methods to the entire app
import create from 'zustand'

const useStore = create(set => ({
  userName: null,
  userPic: null,
  channelID: null,
  setUserName: (userName) => set(state => ({ userName: userName })),
  setUserPic: (userPic) => set(state => ({ userPic: userPic })),
  setChannelID: (channelID) => set(state => ({ channelId: channelID }))
}))

export default useStore