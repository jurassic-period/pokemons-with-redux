import React from "react";

class Pagination extends React.Component {
  state = {
    activePage: 1,
    inputMean: 0
  };

  toClickPage = (page) => {
    this.setState(
      {
        activePage: page
      },
      () => this.props.toChangeUrl(page)
    );
  }

  makePagination = (currentPage, amountPage) => {
    const resultArr = [];
    if (currentPage < 3) {
      for (let i = 1; i <= 5; i++) {
        resultArr.push({ page: i });
      }
    } else if (currentPage > amountPage - 3) {
      for (let i = amountPage - 4; i <= amountPage; i++) {
        resultArr.push({ page: i });
      }
    } else {
      let counter = -2;
      for (let i = 1; i < 6; i++) {
        resultArr.push({ page: currentPage + counter });
        counter += 1;
      }
    }
    return resultArr;
  }

  saveInputMean = (e) => {
    let page = +e.target.value;
    if (page < 1) {
      page = 1;
    } else if (page > this.props.amountPage) {
      page = this.props.amountPage;
    }
    this.setState({
      inputMean: page
    });
  }

  runInputOrStop = () => {
    if (this.state.inputMean) {
      this.toClickPage(this.state.inputMean);
    }
  }

  render() {
    return this.props.amountPage <= 1 ? null : (
      <div className="col-12 pagination">
        <i
          className="fa fa-angle-double-left"
          onClick={() => this.toClickPage(1)}
        ></i>
        {this.makePagination(
          this.state.activePage,
          this.props.amountPage
        ).map(el => (
          <span
            key={el.page}
            onClick={() => this.toClickPage(el.page)}
            className={el.page === this.state.activePage ? "bold" : ""}
          >
            {el.page}
          </span>
        ))}
        <i
          className="fa fa-angle-double-right"
          onClick={() => this.toClickPage(this.props.amountPage)}
        ></i>
        <div className="input">
          <input
            type="text"
            placeholder={"Last: " + this.props.amountPage}
            onChange={this.saveInputMean}
          />
          <button className="btn btn-primary" onClick={this.runInputOrStop}>
            Go
          </button>
        </div>
      </div>
    );
  }
}

export default Pagination;
