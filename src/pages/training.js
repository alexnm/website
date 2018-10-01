import React from 'react'
import Layout from '../components/layout'
import './trainings.css'

const TrainingPage = () => (
  <Layout>
    <h1>Professional Trainings</h1>
    <p>
      I'm available for delivering professional classroom trainings, mainly in
      Cluj, Romania, but also open to short distance travels.
    </p>
    <p>
      Below, you can find some of the training programs I already did or plan on
      doing in the near future.
    </p>
    <ul className="trainings">
      <li>
        <h2>Introduction to React</h2>
        <p>
          2 day training on the fundamentals of building a frontend application
          with React.
        </p>
      </li>
      <li>
        <h2>Evolving Patterns in React</h2>
        <p>Full day training for intermediate React devs.</p>
      </li>
      <li>
        <h2>FP in JavaScript</h2>
        <p>
          Full day training covering the main aspects of functional programming
          in the context of JavaScript.
        </p>
      </li>
      <li>
        <h2>Web Performance</h2>
        <p>
          2 day in-depth training on performance optimizations in modern web
          applications.
        </p>
      </li>
    </ul>
    <p>This is roughly the process I follow:</p>
    <ul>
      <li>Short 30 minutes discussion around the training needs.</li>
      <li>
        I make an offer and propose a curricula based on the initial discussion.
      </li>
      <li>
        We schedule a 30 min, up to 1 hour call with some of the people that are
        targeted by the training.
      </li>
      <li>
        We work on that curricula to make sure it's all tailored for your needs.
      </li>
      <li>Training is delivered according to the final proposal.</li>
      <li>
        We schedule a follow-up meeting/call with the trainees approx one month
        after the training.
      </li>
    </ul>
  </Layout>
)

export default TrainingPage
