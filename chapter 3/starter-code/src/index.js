class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'John',
                    age: 20
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <h1>React State</h1>

                <hr/>
                User Input

                <div className="row">
                    <form className="form-inline">
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Name"
                            //The ref attribute accepts a callback which receives the underlying DOM element as its argument.
                            //in the callback we store a reference to the text input of the DOM element within an instance variable
                            ref={ (input) => this.name = input }
                        />
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Age"
                                ref={ (input) => this.age = input }
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>

                <hr/>
                Output

                <div className="row">
                    {
                        /*
                        To display the data in state, we need to access the data array using this.state.data and then use JavaScript’s map function
                        to loop through the array so that each of its elements is rendered on the page.
                        * */
                        this.state.data.map(
                            (info, index) => {
                                console.log(info);
                                return <Card key={index} info={info}/>
                            }
                        )
                    }
                </div>


            </div>
        )
    }
}

const Card = (props) =>
    <div className="col-md-6 col-lg-3">
        <div className="card mb-3">
            <div className="card-body">
                <p className="card-title">
                    <span>Name: </span>{props.info.name}
                </p>

                <p className="card-text">
                    <span>Name: </span>{props.info.age}
                </p>
            </div>
        </div>
    </div>;

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);