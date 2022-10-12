import * as React from 'react';
import FolderList from './components/FolderList';
import Context from './Context';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()





function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}
function Main() {
  const api_key = 'e5462f2255374b64874778bcaad8ad45'
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-12&sortBy=publishedAt&apiKey=${api_key}`).then(res =>
      res.json()
    )
  ) 
  
  return (
    <div className="App">
      <Context>
        <FolderList isLoading={isLoading} error={error} news={data} />
      </Context>
    </div>
  );
}

export default App;
