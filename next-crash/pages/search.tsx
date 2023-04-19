import NewsArticleGrid from "@/components/NewsArticleGrid";
import { NewsArticle } from "@/modules/NewsArticle";
import Head from "next/head";
import { useState, FormEvent } from "react"
import { Form, Button, Spinner, Alert } from 'react-bootstrap'

const SearchNewsPage = () => {

  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery){
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);
        const response = await fetch(`/api/search-news?q=${searchQuery}`)
        const articles: NewsArticle[] = await response.json();
        setSearchResults(articles);
      } catch (error) {
        console.error(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }

  return (
    <main>
      <Head>
        <title key="title">Search News - Nextjs News App</title>
      </Head>
        <h1>Search News</h1>
        <Alert>
          This page uses <strong>client-side data fetching</strong> to show fresh data for every search. Requests are handled by our backend via <strong>API routes</strong>
        </Alert>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="search-input">
            <Form.Label>Search query</Form.Label>
            <Form.Control
              name='searchQuery'
              placeholder="E.g. politics, sports, ..." 
            />
          </Form.Group>
          <Button type="submit" className="mb-3" disabled={searchResultsLoading}>Search</Button>
        </Form>
        <div className="d-flex flex-column align-items-center">
          {searchResultsLoading && <Spinner animation="border" />}
          {searchResultsLoadingIsError && <p>Something went wrong. Please try again</p>}
          {searchResults?.length === 0 && <p>Nothing found. Try a different query</p>}
          {searchResults && <NewsArticleGrid articles={searchResults} />}
        </div>
    </main>
  )
}

export default SearchNewsPage
