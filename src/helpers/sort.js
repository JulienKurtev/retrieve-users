export const sortUsers = (users , sortParam, sortType) => {
    if(sortType === 'desc'){
        return  users.sort((a,b) => {
            if(a[sortParam] < b[sortParam]) return 1;
            if(a[sortParam] > b[sortParam]) return -1;
            return 0;
        })
    }else{
        return  users.sort((a,b) => {
            if(a[sortParam] < b[sortParam]) return -1;
            if(a[sortParam] > b[sortParam]) return 1;
            return 0;
        })
    }
    
}