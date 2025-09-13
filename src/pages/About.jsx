import countryFacts from "../api/countrydata.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        here are the interesting Facts
        <br />
        we are proud of
      </h2>

      <div className="gradient-cards">
        {countryFacts.map(({ id, countryName, capital, population, interestingFact }) => (
          <div key={id} className="card">
            <div className="container-card bg-blue-box">
              <p className="card-title">{countryName}</p>
              <p>
                <span className="card-description">Capital:</span> {capital}
              </p>
              <p>
                <span className="card-description">Population:</span> {population}
              </p>
              <p>
                <span className="card-description">Fact:</span> {interestingFact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};