import React , { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import Container from './styles/grid/container.style';
import theme from './theme/theme';
import GlobalStyles from './styles/global.style';
import SectionUsers from './sections/section-users';
import { sortUsers } from './helpers/sort';

const API_URL = 'http://localhost:8099';

function App() {
  const [ retrievedUsers , setRetrievedUsers ] = useState(null);
  const [ searchResults , setSearchResults ] = useState(null);
  const [ searchParam , setSearchParam ] = useState("");

  //Fetch users from 3 differentAPI points and filter them by age range
  const fetchUsers = async (minAge = 0 , maxAge = 100) => {
    //Clear previous search params
    setSearchParam('');

    const kids = fetch(`${API_URL}/users/kids`).then(resp => resp.json());
    const adults = fetch(`${API_URL}/users/adults`).then(resp => resp.json());
    const seniors = fetch(`${API_URL}/users/seniors`).then(resp => resp.json());

    const results = await Promise.all([kids, adults, seniors]);

    let allUsers = [];
    //Strip kids and adults additional data array
    for (let index = 0; index < results.length; index++) {
      if(results[index].data !== undefined){
        allUsers = [
          ...allUsers,
          ...results[index].data
        ]
      }else{
        allUsers = [
          ...allUsers,
          ...results[index]
        ]
      }
    }

    //Extract name and age and filter by age range
    const filteredUsers = allUsers.map(user => {
      return {
         age: user.age,
         name: `${user.name.firstName} ${user.name.lastName}`
      }
    }).filter(u => u.age >= minAge && u.age <= maxAge);;

    setRetrievedUsers(filteredUsers);
  }

  //Search bar functionality
  const search = input => {
    //Search if we have at least 2 cahracters entered
    if(input.length >= 2){
      setSearchParam(input);

      const searchedUsers = retrievedUsers.filter(u => u.name.toLowerCase().includes(input));
      
      setSearchResults(searchedUsers);
    }else if (input.length === 0){
      setSearchResults(retrievedUsers);
    }
  }

  //Sort by params
  const sortByParam = (sortParam, sortType) => {
    if(searchParam === ''){
      const currentRetrievedUsers = [
        ...retrievedUsers
      ]

      const sortedUsers = sortUsers(currentRetrievedUsers, sortParam, sortType);

      setRetrievedUsers(sortedUsers);
    }else{
      const currentSearchedUsers = [
        ...searchResults
      ]

      const sortedUsers = sortUsers(currentSearchedUsers, sortParam, sortType);

      setSearchResults(sortedUsers); 
    }
  }
   
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Container>
          <SectionUsers 
            users={searchParam === '' ? retrievedUsers : searchResults}
            fetchUsers={fetchUsers}
            search={search}
            sortByParam={sortByParam}
          />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
