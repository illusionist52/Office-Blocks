import LinkButton from "../ui/LinkButton";

export default function PropertyCatalogue(){
    return (
        <>
            {/* HEADING FOR THE LAYOUT */}
            <div>
                <div>
                <div>
                    <h1>Beverly Springfield</h1>
                    <p>2821 Lake Chuma, Kurla</p>
                </div>
                <div>
                    <LinkButton> Share </LinkButton>
                    <LinkButton> Share </LinkButton>
                    <LinkButton> Share </LinkButton>
                </div>
                </div>
            </div>

            {/* IMAGE OF THE PROPERTY  */}
            <div>
                <img src="" alt="DEMO IMAGE" />
            </div>

            <div>
                <h4>Rooms</h4>
                <p>3</p>
                <h4>Square Area</h4>
                <p>6 x 7.5 m <sup>2</sup> </p>
                <h4>Refair Quality</h4>
                <p>ModernLoft</p>
                <h4>Status</h4>
                <p>Active</p>
            </div>

            <div>
                <h2>About the property</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti mollitia ipsam recusandae eveniet, accusantium rem aperiam odio sit provident vitae quam. Id vero odit et, quos dolor eum, quaerat facere tempora vitae officiis perferendis obcaecati optio debitis beatae, minima suscipit consequatur tempore nemo. Ipsa, necessitatibus. Earum ad amet repellendus, cupiditate ea vero? Aliquam esse accusantium corrupti, autem laudantium, asperiores quia ut cupiditate dolorem aliquid sapiente amet repellat molestias aut neque minus explicabo hic praesentium deleniti error voluptatum placeat cum? Doloribus voluptas vel quaerat porro distinctio inventore officia ab quos impedit.</p>
            </div>
        </>
    )
}