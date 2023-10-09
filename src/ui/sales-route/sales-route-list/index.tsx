import React from "react";
import EditIcon from "../../../assets/component/EditIcon";
import RemoveIcon from "../../../assets/component/RemoveIcon";
import { Colors } from "../../common/colors";
import Table from "../../common/components/table";
import { useStylesFromThemeFunction } from "./SalesRoutrList";
import toast from "react-hot-toast";
import { Modal } from "react-bootstrap";
import { getAllSalesRoutes, editSalesRoute } from "../../../parser/sales-route";
import SalesRouteForm from "../sales-route-form";

interface ComponentProps {
  salesRoutes?: any[];
}

const SalesRouteList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings] = React.useState(["id", "Name", "Actions"] as string[]);
  const [isLoading] = React.useState(false);
  const [selectedSalesRoute, setSelectedSalesRoute] = React.useState({} as any);
  const [salesRoutes, setSalesRoutes] = React.useState(
    props?.salesRoutes as any[] | [] as any[]
  );
  const [showSalesRouteUpdateModal, setShowSalesRouteUpdateModal] =
    React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (SalesRoute: any) => {
  //   setSelectedSalesRoute(SalesRoute);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getAllSalesRoutes().then((res) => {
      setSalesRoutes(res);
      renderTableData();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveSalesRoute = (SalesRoute: any) => {
    try {
      if (window.confirm("Are you sure you want to remove this SalesRoute?")) {
        // call delete SalesRoute api here

        toast.success(`${SalesRoute.name} removed successfully`);
      } else {
        throw new Error("SalesRoute not removed");
      }
    } catch (e) {
      toast.error(e.message || "Error while removing SalesRoute");
    }
  };
  const handleEditSalesRoute = (SalesRoute: any) => {
    setSelectedSalesRoute(SalesRoute);
    setShowSalesRouteUpdateModal(true);
  };
  const handleUpdate = (updatedSalesRoute: any) => {
    // call edit SalesRoute api here
    editSalesRoute(updatedSalesRoute.id, updatedSalesRoute)
      .then((res) => {
        toast.success(`${updatedSalesRoute.name} updated successfully`);
        setShowSalesRouteUpdateModal(false);
        setSelectedSalesRoute({} as any);
      })
      .catch((e) => {
        toast.error(e.message || "Error while updating SalesRoute");
      });
  };
  const renderTableData = () => {
    return salesRoutes?.map((SalesRoute) => {
      return (
        <tr
          key={SalesRoute.id}
          onDoubleClick={() => handleEditSalesRoute(SalesRoute)}
        >
          <td>{SalesRoute.id}</td>
          <td>{SalesRoute.name}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div
                className={classes.iconWrapper}
                onClick={() => handleEditSalesRoute(SalesRoute)}
              >
                <EditIcon fill={Colors.gray} />
              </div>
              <div
                className={classes.iconWrapper}
                onClick={() => handleRemoveSalesRoute(SalesRoute)}
              >
                <RemoveIcon fill={Colors.red} />
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  if (salesRoutes?.length !== 0) {
    renderTableData();
  }

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal
        className={classes.modalWrapper}
        show={showSalesRouteUpdateModal}
        onHide={() => setShowSalesRouteUpdateModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Update <b>{selectedSalesRoute.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <SalesRouteForm
              salesRoute={selectedSalesRoute}
              onSubmit={handleUpdate}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SalesRouteList;
