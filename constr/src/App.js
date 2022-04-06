import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import propTypes from 'prop-types'
import { useReactToPrint } from 'react-to-print'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Descr from './components/UI/Descr/Descr'
import Range from './components/UI/Range/Range'

import Title from './components/UI/Title/Title'

import { ReactComponent as MailIcon } from './assets/img/mail.svg'
//import { ReactComponent as PhoneIcon } from './assets/img/phone.svg'
import Avatar from './components/UI/Avatar';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`

const App = () => {
  const [skillsCounter, setSkillsCounter] = React.useState(1)
  const [worksCounter, setWorksCounter] = React.useState(1)

  const componentRef = React.useRef()
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })
  return (
    <div className='ui-wrapper'>
    <Header onClick={handlePrintClick} />
    <div className='ui-content-wrapper'>
      <Wrapper>
        <div className='ui-container' ref={componentRef}>
          <Row itemsCenter>
            <Sidebar>
              <Avatar />
            </Sidebar>
            <Content>
              <Title>Имя Фамилия</Title>
              <Descr>
                Желаемая должность
              </Descr>
            </Content>
          </Row>

          <Row>
            <Sidebar>
              <Title size='3' isUppercase>
                Контактная информация:
              </Title>
              <Descr>Профессия</Descr>
              <Descr isSecondary>Образование</Descr>

              <Descr isPrimary style={{ marginTop: '2rem' }}>
                <MailIcon style={{ marginRight: '0.6rem' }} />
                Почта@gmail.com
              </Descr>
              <Descr isPrimary>
                +1 588-6500
              </Descr>
            </Sidebar>

            <Content>
              <Title size='3' isUppercase>
                Образование:
              </Title>
              <Descr>Stanford University - BS Electrical Engineering</Descr>

              <Title
                size='3'
                isUppercase
                isShowButton
                onClick={() => setWorksCounter(worksCounter + 1)}
                style={{ marginTop: '3.6rem' }}
              >
                Опыт работы:
              </Title>
              {new Array(worksCounter).fill(1).map((_, i) => (
                <Descr key={i}>{i + 1}. Solutions Architect, Stripe.</Descr>
              ))}

              <Title
                size='3'
                isUppercase
                isShowButton
                onClick={() => setSkillsCounter(skillsCounter + 1)}
                style={{ marginTop: '3rem' }}
              >
                Skills:
              </Title>

              {new Array(skillsCounter).fill(1).map((_, i) => (
                <Range key={i} />
              ))}
            </Content>
          </Row>
        </div>
      </Wrapper>
    </div>
    <Footer />
  </div>
  );
}

export default App;
