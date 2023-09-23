// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewCount: 0}

  onLeftArrowClicked = () => {
    const {activeReviewCount} = this.state

    let latestLeftArrowCount = activeReviewCount

    if (activeReviewCount <= 0) {
      latestLeftArrowCount = 0
    } else {
      latestLeftArrowCount -= 1
    }

    this.setState({
      activeReviewCount: latestLeftArrowCount,
    })
  }

  onRightArrowClicked = () => {
    const {reviewsList} = this.props
    const {activeReviewCount} = this.state
    let latestRightArrowCount = activeReviewCount

    if (activeReviewCount >= reviewsList.length - 1) {
      latestRightArrowCount = reviewsList.length - 1
    } else {
      latestRightArrowCount += 1
    }

    this.setState({
      activeReviewCount: latestRightArrowCount,
    })
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewCount} = this.state
    console.log(activeReviewCount)
    console.log(reviewsList.length)

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="information-container">
          <button className="icon-button" data-testid="leftArrow" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="icon"
              onClick={this.onLeftArrowClicked}
            />
          </button>

          <div className="card-container">
            <img
              src={reviewsList[activeReviewCount].imgUrl}
              className="image"
              alt={reviewsList[activeReviewCount].username}
            />

            <p className="name">{reviewsList[activeReviewCount].username}</p>

            <p className="para">{reviewsList[activeReviewCount].companyName}</p>
            <p className="para">{reviewsList[activeReviewCount].description}</p>
          </div>

          <button className="icon-button" type="button" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="icon"
              onClick={this.onRightArrowClicked}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
