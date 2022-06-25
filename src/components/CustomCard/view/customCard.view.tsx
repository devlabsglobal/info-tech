import { Card } from "react-bootstrap";

const CustomCard = (props: any) => {
  const listItems: string[] = [...props.listItems];

  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <img
            style={{
              justifyItems: "left",
              justifyContent: "left",
              height: 45,
              width: 60,
              marginRight: 10,
            }}
            src={props.icon}
            alt="icon"
          />
          <h3>
            <a href="#" title={props.title}>
              {props.title}
            </a>
          </h3>
        </Card.Title>
        <p>{props.body}</p>
      </Card.Header>
      <Card.Body>
        <h4>{props.listTitle}</h4>
        <ul>
          {listItems.map((item, index) =>
            props.anchor ? (
              <li key={index}>
                <a href="/#" title={item}>
                  {item}
                </a>
              </li>
            ) : (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
