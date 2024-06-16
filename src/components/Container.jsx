
import Genre from './Genre';


function Container () {
  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>
      <Genre
        name="Comedy"
        description="Comedy movies are designed to make the audience laugh."
        movieTitle1={{ title: "Superbad", year: 2007 }}
        movieTitle2={{ title: "Step Brothers", year: 2008 }}
      />
      <Genre
        name="Romance"
        description="Romance movies are love stories."
        movieTitle1={{ title: "The Notebook", year: 2004 }}
        movieTitle2={{ title: "Pride & Prejudice", year: 2005 }}
      />
    </div>
  );
};

export default Container;
