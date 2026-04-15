import React from "react";
import "./App.css";

// Avatar Component
const Avatar = ({ image }) => {
  return <img src={image} alt="avatar" className="avatar" />;
};

// Bio Component
const Bio = ({ name, role, bio }) => {
  return (
    <div className="bio">
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{bio}</p>
    </div>
  );
};

// Badge Component (conditional)
const Badge = ({ available }) => {
  return (
    <>
      {available && <span className="badge">Available for hire</span>}
    </>
  );
};

// ProfileCard Component
const ProfileCard = ({ name, role, bio, image, available }) => {
  return (
    <div className="card">
      <Avatar image={image} />
      <Bio name={name} role={role} bio={bio} />
      <Badge available={available} />
    </div>
  );
};

// Skills List Component (Task 2)
const SkillsList = ({ skills }) => {
  return (
    <div className="skills">
      <h3>Skills</h3>

      {skills.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {skills.map((skill, index) => {
            /*
            React ikoresha "key" kugirango ibashe kumenya buri element iri muri list.
            Ibi bifasha React kumenya igihindutse igihe data ihindutse (efficient updates).
            Bityo React ikaba ishobora gukora rendering neza itongeye gushushanya ibintu byose.
            */
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <h1>Profile Cards</h1>

      {/* 3 Profile Cards */}
      <ProfileCard
        name="Moses Mugisha"
        role="Frontend Developer"
        bio="I love building web interfaces using React."
        image="https://i.pravatar.cc/150?img=1"
        available={true}
      />

      <ProfileCard
        name="Alice Uwase"
        role="UI/UX Designer"
        bio="Passionate about creating beautiful designs."
        image="https://i.pravatar.cc/150?img=2"
        available={false}
      />

      <ProfileCard
        name="John Doe"
        role="Backend Developer"
        bio="I build APIs and manage databases."
        image="https://i.pravatar.cc/150?img=3"
        available={true}
      />

      {/* Skills Section */}
      <SkillsList skills={["React", "JavaScript", "CSS", "Node.js"]} />

      {/* Empty list example */}
      <SkillsList skills={[]} />
    </div>
  );
}

export default App;