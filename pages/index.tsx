import React from 'react'
import { NextPage } from 'next'

import {
  Footer,
  GithubCorner,
  QuizBackground,
  QuizContainer,
  QuizLogo,
  Widget,
} from '../components/'

const IndexPage: NextPage = () => {
  return (
    <>
      <QuizBackground>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>Ola mundo 👋</Widget.Header>
            <Widget.Content>
              <ul>
                <li>oi</li>
                <li>oi</li>
                <li>oi</li>
              </ul>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>Ola mundo 👋</Widget.Header>
            <Widget.Content>
              <ul>
                <li>oi</li>
                <li>oi</li>
                <li>oi</li>
              </ul>
            </Widget.Content>
          </Widget>
        </QuizContainer>
      </QuizBackground>
      <GithubCorner projectUrl="#" />
      <Footer />
    </>
  )
}

export default IndexPage
