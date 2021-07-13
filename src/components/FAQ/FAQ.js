import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '100%',
        flexShrink: 0,
    }
}));

const FAQ = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="text-start">
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}><h6>What Frosh Link?</h6></Typography>                  
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi nesciunt voluptatem. Velit corporis minima nostrum provident aliquid voluptatibus officia amet, odio iste, error modi laboriosam sunt at? Velit explicabo sit ipsum laudantium optio obcaecati autem magnam atque aspernatur iure id itaque neque quis ad, non illo minus beatae distinctio?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                        <Typography className={classes.heading}><h6>Why Frosh Link?</h6></Typography>
                    
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facilis ducimus tempora asperiores recusandae. Perspiciatis delectus ipsa facere repudiandae? Suscipit dolorem eligendi iste. Quidem, reprehenderit temporibus magnam, accusamus quia asperiores, excepturi aut culpa tenetur rem minima. Consequuntur, fugiat! Repellendus quis molestias error saepe earum cumque. Facilis soluta non laudantium libero?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                        <Typography className={classes.heading}><h6>Where Are We Located?</h6></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis earum modi alias sapiente dolore ipsum, possimus excepturi laudantium magnam quo delectus tenetur facere at amet quod, id dolorum maxime? Quis quae nostrum eum odit? Illo distinctio, consectetur at soluta id excepturi quia debitis molestiae, magnam blanditiis accusantium, doloribus totam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                        <Typography className={classes.heading}><h6>Our Services?</h6></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde corporis quasi in totam? Qui, nostrum nesciunt debitis autem impedit aut! Quas, aperiam enim maxime dolore animi iure eius in, molestias aliquam quisquam nobis quam? Dignissimos numquam optio harum consectetur consequatur quibusdam illo temporibus dolor eveniet, delectus dolorem repellat velit nemo!
                    </Typography>
                </AccordionDetails>
            </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}><h6>Need An Advisor?</h6></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique quasi suscipit porro at, nobis, molestiae facere quidem excepturi in iure reiciendis reprehenderit dolorum voluptatibus. Delectus ratione, iste voluptate perspiciatis recusandae, quas nam voluptates veritatis aperiam nostrum est quam eaque dolores earum expedita nobis dolore nisi laborum obcaecati aspernatur molestias.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}><h6>Geeing Started With Frosh Link</h6></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corporis cupiditate, eligendi doloremque iste ad a veniam dolor delectus cum? Ducimus, iste. Architecto vitae dicta neque laborum. Est similique vel culpa ratione commodi, tenetur illum impedit laboriosam nobis officia et, sit neque fugit numquam facere molestiae rerum fuga rem? Praesentium.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}><h6>Our Previous Works</h6></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corporis cupiditate, eligendi doloremque iste ad a veniam dolor delectus cum? Ducimus, iste. Architecto vitae dicta neque laborum. Est similique vel culpa ratione commodi, tenetur illum impedit laboriosam nobis officia et, sit neque fugit numquam facere molestiae rerum fuga rem? Praesentium.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
        </div>
        </div>
    );
};

export default FAQ;

