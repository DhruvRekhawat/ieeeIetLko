import React from 'react'
import './Blog1.css'
import comic1 from './A-path-planning-comic.png'
import comic2 from './blog12.png'
import ietLogo from './800px-Ietlogo.png'
import blogImg1 from './8847863.fig.001.png'
import blogImg2 from './8847863.fig.003.png'
import blogImg3 from './8847863.fig.002.png'
import blogImg4 from './8847863.fig.007a.png'
import blogImg5 from './8847863.fig.006.png'
import blogImg6 from './EFg3u_E6eHU-HQ.jpg'
import { Link } from 'react-router-dom'
const Blog1 = () => {
  return (

    <div className='blogPage section__padding '> 
    <div className="ietLogoContainer hugemargin"><img src={ietLogo} alt="" srcset="" /></div>
     <div className="titleCard">
    <h1 className='hero__header hugemargin' style={{color:'black'}}>Session 1: 2D Path
    Planning, its importance
    and its application</h1>
    <p><u>Report Authored By:</u>Antriksh Singh Rathore, Kshitij Gupta </p>
    <p><u>Faculty Coordinator:</u> Dr. Neelam Srivastava Ma’am, ECE Dept. IET
    Lucknow</p>
    <p><u>Mentees of the Session: </u>Antriksh Singh Rathore, Kshitij Gupta,
    Abhinav Kumar, Anindya Ranjan Samaddar, Ashish Singh, Divyansh
    Jaiswal, Gaurav Chaurasiya</p>
    <p><u>Mentors of the Session:</u> Aastha Chauhan, Anshuman Singh,
    Saksham Gautam, Keshav Gupta</p>
    <h3><u>Email :</u> antrikshrs28@gmail.com
    ,
    kshitijgupta084@gmail.com
    </h3>
    <h3>March 9, 2023</h3>
</div>

<h4 className='boldblue'>Day 1</h4>
    <h4 className='boldblue'>What is 2D Path
    Planning ?</h4>
    <div className="bloggrid">
            <p>The computation of an
        ideal or practical path for
        a robot or item to navigate
        in a two-dimensional (or
        even three-dimensional)
        space is called path
        planning.</p>
        <div className="blogimg"><img src={comic1}></img></div>
        <p></p>
        <h4 className='boldblue'>What will be
            the future of
            2D path
            planning?</h4>
        <p>As a result of continuous
            study and technical
            progress, 2D path planning is anticipated to experience improvements in a number
            of areas in the future. Here are some prospective developments and trends:</p>
        <h5 className='red'> 1. Collision Avoidance:</h5>
        <p>To ensure that robots or objects can
        navigate without colliding with other
        items or obstacles in a specific area, 2D path
        planning's main goal. Path planning
        algorithms compute safe and obstacle-free
        courses, which helps to avoid collisions,
        lessen damage to the robot or its
        surroundings, and improve overall safety.</p>
        <div className="longcomic"><img src={comic2} alt="" srcset="" /></div>
        <h5 className='red'> 2. Autonomous Navigation:</h5>
        <p>For autonomous robots and vehicles to
        successfully explore challenging areas
        without human assistance, path planning is
        crucial. These systems can perform tasks like
        autonomous exploration, surveillance,
        delivery, or transportation by developing
        optimal pathways that allow them to work
        effectively, avoid impediments, and arrive at
        their objectives.</p>
        <h5 className='red'> 3. Real-World Applications</h5>
        <p>Aerial surveillance, robotics, manufacturing, logistics, warehouse automation,
        agriculture, search and rescue operations, and other fields are just a few of the
        real-world uses for 2D path planning. It makes it possible to move in complicated
        and dynamic situations safely and effectively, increasing output, lowering labour
        requirements, and opening up new possibilities.</p>
        <h5 className='red'> 4. Virtual Environments and Simulations:</h5>
        <p>2D route planning is used to model the mobility of actors, objects, or entities in
        computer graphics and virtual simulations. In video games, virtual reality (VR),
        augmented reality (AR), or virtual training simulations, path planning algorithms
        allow realistic and natural-looking movement, interaction, and navigation within the
        virtual environment.</p>
    <h4 className='boldblue'>What are the methods of 2D path planning?</h4>
    <p>There are several
    methods and algorithms
    for 2D path planning.
    Here are some commonly
    used approaches:</p>
    <div className="img1"><img src={blogImg1} alt="" srcset="" /></div>
    <h5 className='red'>1. Grid-Based Methods:</h5>
    <p>Grid-based algorithms divide the environment into a grid of cells, where each cell
represents a portion of the space. These methods include:</p>
    <div className="longcomic img2"><img src={blogImg2} alt="" srcset="" /></div>
        <li className='listStyle'>Dijkstra's Algorithm</li>
        <p>It is a graph search
algorithm that computes
the shortest path from a
start point to a goal point
by exploring the grid cells.</p>
        <li className='listStyle'>A* Algorithm</li>
        <p>A* combines Dijkstra's
algorithm with heuristics
to improve efficiency. It
uses a cost function that
considers both the path
cost from the start point and an estimate of the remaining cost to the goal.
A* is widely used for optimal pathfinding</p>
    
    <h5 className='red'>2. Potential Field Methods:</h5>
    <p>Potential field algorithms represent the
environment as a field where attractive
forces guide the robot towards the goal,
while repulsive forces repel it from
obstacles. These methods include:</p>
<div className="img1"><img src={blogImg3} alt="" srcset="" /></div>
<li className='listStyle'>Artificial Potential Field (APF)</li>
<p>APF
assigns attractive potentials to the
goal and repulsive potentials to
obstacles. The robot moves along the
gradient of the potential field towards
the goal while avoiding obstacles.</p>
<li className='listStyle'>Elastic Band Method:</li>
<p>This method
represents the path as a continuous
elastic band. The band is deformed to
avoid obstacles, and the robot follows the deformed band as it moves</p>
    <h5 className='red'>3. Visibility Graph Methods</h5>
    <p>Visibility graph algorithms construct a graph by connecting visible points in the
environment and finding the shortest path on this graph. These methods include:</p>
    <div className="img1"><img src={blogImg4} alt="" srcset="" /></div>
    <li className='listStyle'>Voronoi Diagram:</li>
    <p>Voronoi diagrams divide
the space into regions
based on proximity to
obstacles. The paths
between Voronoi vertices</p>
    <li className='listStyle'>Tangent Bug Algorithm:</li>
    <p>The Tangent Bug
Algorithm uses the
visibility graph and
incremental movements to navigate around obstacles. It moves along the
obstacle boundary until a point on the visibility graph is reached.</p>
    <h5 className='red'>4. Sampling-Based Methods:</h5>
    <p>Sampling-based algorithms randomly sample the configuration space and build a
roadmap to search for feasible paths. These methods include:</p>
    <div className="img1"><img src={blogImg5} alt="" srcset="" /></div>
<li className='listStyle'>Probabilistic Roadmap (PRM):</li>
<p>PRM samples random points in the
environment and connects them to build a graph. It then performs graph
search algorithms to find a path between the start and goal points</p>
<li className='listStyle'>Rapidly Exploring Random Tree (RRT):</li>
<p>RRT incrementally builds a tree
structure by extending the tree towards randomly sampled points. It rapidly
explores the configuration space and finds a feasible path</p>
<p>These are just a few examples of the methods used in 2D path planning. Each
method has its strengths and weaknesses, and the choice of algorithm depends on
the specific requirements of the application, the complexity of the environment,
and the desired performance characteristics.</p>
    <h5 className='red'>5. Conclusions:</h5>
    <p>During the session on 2D path planning, we explored the significance of path
planning and discussed various methods. We highlighted grid-based approaches
such as Dijkstra and A*, which divide the environment into a grid and find the
optimal path based on distance or heuristics. Additionally, we covered potential
field methods like elastic bands and artificial potential fields that leverage
attractive and repulsive forces to guide the path. Visibility graph techniques,
including Voronoi and tangent-based methods, utilize visibility relationships
between points to determine feasible paths. Lastly, we delved into
sampling-based methods such as Probabilistic Roadmaps (PRM) and
Rapidly-Exploring Random Trees (RRT), which employ random sampling to
generate a roadmap or tree structure for path planning. These methods offer
diverse approaches to tackling the challenges of 2D path planning.</p>
    <h4 className='boldblue'>What will we do in the next session?</h4>
    <img src={blogImg6} alt="" />
    <p>In the next session, we will understand more about Dijkstra’s algorithm and its
application</p>
<p></p>
<h3>REFERENCES</h3>
<li className='listStyle'><Link style={{color:"blue"}} to="www.willowgarage.com">www.willowgarage.com , </Link><Link style={{color:"blue"}} to="https://www.thingsinsquares.com/">www.thingsinsquares.com</Link></li><span>for reference images</span>
<li className='listStyle'><Link style={{color:"blue"}} to="https://www.youtube.com/watch?v=EFg3u_E6eHU">How Dijkstra's Algorithm Works- Youtube</Link></li><span>Video reference</span>
    </div>
    
 
</div>
  
   

  )
}

export default Blog1