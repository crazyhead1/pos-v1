import React, { useMemo } from "react";
import EditIcon from "../../../assets/component/EditIcon";
import RemoveIcon from "../../../assets/component/RemoveIcon";
import { Colors } from "../../common/colors";
import Table from "../../common/components/table";
import { useStylesFromThemeFunction } from "./OrganisationList";
import toast from "react-hot-toast";
import { Modal } from "react-bootstrap";
import {
  getAllOrganisations,
  editOrganisation,
} from "../../../parser/organisation";
import OrganisationForm from "../organisation-form";
import ButtonComponent from "../../common/components/button-component";

interface ComponentProps {
  organisations?: any[];
}

const OrganisationList: React.FC<ComponentProps> = (props) => {
  const classes = useStylesFromThemeFunction();
  const [tableHeadings, setTableHeadings] = React.useState([
    "id",
    "Name",
    "Designation",
    "Department",
    "Phone Number",
    "Address",
    "Actions",
  ] as string[]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedOrganisation, setSelectedOrganisation] = React.useState(
    {} as any
  );
  const [organisations, setOrganisations] = React.useState(
    props?.organisations as any[] | [] as any[]
  );
  const [showOrganisationUpdateModal, setShowOrganisationUpdateModal] =
    React.useState(false);

  // const handleCloseEditModal = () => setShowEditModal(false);
  // const handleShowEditModal = (Organisation: any) => {
  //   setSelectedOrganisation(Organisation);
  //   setShowEditModal(true);
  // }
  React.useEffect(() => {
    getAllOrganisations().then((res) => {
      setOrganisations(res);
    });
  }, []);

  const handleRemoveOrganisation = (Organisation: any) => {
    try {
      if (
        window.confirm("Are you sure you want to remove this Organisation?")
      ) {
        // call delete Organisation api here

        toast.success(`${Organisation.name} removed successfully`);
      } else {
        throw new Error("Organisation not removed");
      }
    } catch (e) {
      toast.error(e.message || "Error while removing Organisation");
    }
  };
  const handleEditOrganisation = (Organisation: any) => {
    setSelectedOrganisation(Organisation);
    setShowOrganisationUpdateModal(true);
  };
  const handleUpdate = (updatedOrganisation: any) => {
    // call edit Organisation api here
    editOrganisation(updatedOrganisation.id, updatedOrganisation)
      .then((res) => {
        toast.success(`${updatedOrganisation.name} updated successfully`);
        setShowOrganisationUpdateModal(false);
        setSelectedOrganisation({} as any);
      })
      .catch((e) => {
        toast.error(e.message || "Error while updating Organisation");
      });
  };
  const renderTableData = useMemo(() => {
    return organisations?.map((organization) => {
      return (
        <tr
          key={organization.id}
          onDoubleClick={() => handleEditOrganisation(organization)}
        >
          <td>{organization.id}</td>
          <td>{organization.name}</td>
          <td>{organization.type}</td>
          <td>{organization.founded}</td>
          <td>{organization.description}</td>
          <td>{organization.website}</td>
          <td>{organization.phone}</td>
          <td>{organization.email}</td>
          <td>{organization.address}</td>
          <td>{organization.city}</td>
          <td>{organization.state}</td>
          <td>{organization.country}</td>
          <td>{organization.postalCode}</td>
          <td>
            <div className={classes.equallyDistantRow}>
              <div
                className={classes.iconWrapper}
                onClick={() => handleEditOrganisation(organization)}
              >
                <EditIcon fill={Colors.gray} />
              </div>
              <div
                className={classes.iconWrapper}
                onClick={() => handleRemoveOrganisation(organization)}
              >
                <RemoveIcon fill={Colors.red} />
              </div>
            </div>
          </td>
        </tr>
      );
    });
  }, [organisations]);

  return (
    <>
      <Table
        tableHeadings={tableHeadings}
        renderBody={renderTableData}
        loading={isLoading}
      />
      <Modal
        className={classes.modalWrapper}
        show={showOrganisationUpdateModal}
        onHide={() => setShowOrganisationUpdateModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Update <b>{selectedOrganisation.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.modalBodyWrapper}>
            <OrganisationForm
              organisation={selectedOrganisation}
              onSubmit={handleUpdate}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrganisationList;
