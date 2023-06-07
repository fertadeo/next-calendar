import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./styles.module.css";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
         <div className={styles.arrow}>
         <i className="ri-arrow-down-s-line"  alt="Chevron Down"></i>
         </div>
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function App() {
  return (
    <div className={styles.app}>
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header="ADOLESCENCIA"  initialEntered>
           
             <i className="ri-book-2-fill"> Caracteristicas Psicologicas del desarrollo en la adolescencia</i> 

        </AccordionItem>

        <AccordionItem header="ALERGIA">
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
        </AccordionItem>

        <AccordionItem header="CARDIOLOGIA">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
        <AccordionItem header="EJERCICIO PROFESIONAL">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
        <AccordionItem header="ENDOCRINOLOGIA">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
