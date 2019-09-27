import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      inputMean: 0
    };
    this.toSaveInputMean = this.toSaveInputMean.bind(this);
    this.toRunInputOrStop = this.toRunInputOrStop.bind(this);
  }

  toClickPage(page) {
    this.setState(
      {
        activePage: page
      },
      () => this.props.toChangeUrl(page)
    );
  }
  //  __________Different way with creating array for all pages__________
  // toMakePagination(currentPage, amountPage) {
  //   const allPagesArr = [];
  //   for (let i = 1; i <= amountPage; i++) {
  //     allPagesArr.push({ page: i });
  //   }
  //   if (currentPage <= 3 || currentPage > amountPage - 4) {
  //     return currentPage <= 3
  //       ? allPagesArr.slice(0, 5)
  //       : allPagesArr.slice(amountPage - 5, amountPage);
  //   } else {
  //     return allPagesArr.slice(currentPage - 3, currentPage + 2);
  //   }
  // }

  toMakePagination(currentPage, amountPage) {
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

  toSaveInputMean(e) {
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

  toRunInputOrStop() {
    if (this.state.inputMean) {
      this.toClickPage(this.state.inputMean);
    }
  }

  render() {
    return (
      this.props.amountPage <= 1? null :
      <div className="col-12 pagination">
        <i
          className="fa fa-angle-double-left"
          onClick={() => this.toClickPage(1)}
        ></i>
        {this.toMakePagination(
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
            onChange={this.toSaveInputMean}
          />
          <a href="#" onClick={this.toRunInputOrStop}>
            Go
          </a>
        </div>
      </div>
    );
  }
}

export default Pagination;
