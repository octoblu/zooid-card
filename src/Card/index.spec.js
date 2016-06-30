import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Card from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Card />', () => {
  it('should render nothing', () => {
    const sut = shallow(<Card />)
    expect(sut).to.be.empty
  })
})

describe('when given children as prop', () => {
  let sut

  beforeEach(() => {
    sut = shallow(<Card><div>Final Countdown!!!</div></Card>)
  })

  it('should render children', () => {
    expect(sut).to.contain(<div>Final Countdown!!!</div>)
  })

  it('should render with style', () => {
    expect(sut).to.have.className(styles.card)
  })
})

describe('when given a className', () => {
  it('should merge classes', () => {
    const sut = shallow(<Card className="always"><div>Final Countdown!!!</div></Card>)
    expect(sut).to.have.className('always')
  })
})
