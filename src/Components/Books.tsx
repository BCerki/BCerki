const Books: React.FC = () => {
  return (
    <div>
      <h1>Books</h1>
      <div className="book-grid">
        <div className="book">
          <div className="cover-div">
            <img className="cover-image" src="Images/avalanche.jpg" />
          </div>
          <div className="book-codivy">
            When Andrea starts at a new high school in November, she doesn’t
            think she’s ever going to fit in. She’s behind in all her classes,
            she dresses like a middle-schooler, and she can’t tell if her
            classmates Cole and Alexandria want to be her friends or want to
            beat her up. When the PE teacher organizes a field trip to a ski
            resort, it’s Andrea’s best chance to prove she’s not a loser. But
            the best snow is always in avalanche zones.
            <div className="pub-date">April 2019</div>
          </div>
        </div>
        <div className="book">
          <div className="cover-div">
            <img className="cover-image" src="Images/summercamp.jpg" />
          </div>
          <div className="book-copy">
            For Derek’s thirteenth birthday, his mom sends him to summer camp.
            But while Camp Rainbow has all the usual summer camp stuff—archery,
            scavenger hunts, and vegetable showdowns—there’s something
            not-so-usual about it. Campers aren’t allowed in certain fields, and
            when Derek and his best friend sneak into one of the off-limits
            areas, they discover the secret the camp counsellors are trying to
            hide.
            <div className="pub-date">November 2016</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Books;
