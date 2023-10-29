import { useFormik } from "formik";
import React from "react";
import { Colors } from "../../common/colors";
import ButtonComponent from "../../common/components/button-component";
import { ComponentProps, useStylesFromThemeFunction } from "./OrganisationForm";

const OrganisationForm: React.FC<ComponentProps> = ({
  onSubmit,
  onChange,
  organisation,
  options,
  onImageChange,
}) => {
  const classes = useStylesFromThemeFunction();

  const initialValues = {
    id: organisation?.id || "",
    name: organisation?.name || "",
    type: organisation?.type || "",
    founded: organisation?.founded || "",
    description: organisation?.description || "",
    website: organisation?.website || "",
    phone: organisation?.phone || "",
    email: organisation?.email || "",
    address: organisation?.address || "",
    city: organisation?.city || "",
    state: organisation?.state || "",
    country: organisation?.country || "",
    postalCode: organisation?.postalCode || "",
    logo: organisation?.logo || "",
    ceo: organisation?.ceo || "",
    numEmployees: organisation?.numEmployees || "",
    revenue: organisation?.revenue || "",
    industry: organisation?.industry || "",
    parentOrganization: organisation?.parentOrganization || "",
    dateUpdated: organisation?.dateUpdated || "",
  };
  const validate = (values) => {};
  // const onSubmit = (values) => {

  // }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values, { resetForm });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.container}>
          <div className="form-group">
            <div className={classes.column}>
              <label htmlFor="id">
                Id<span className={classes.colorRed}>*</span>{" "}
                <span className={classes.labelHintWrapper}>Enter CNIC</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                value={formik.values.id}
                required
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="name">
                Name<span className={classes.colorRed}>*</span>{" "}
                <span className={classes.labelHintWrapper}>
                  Organization Name
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formik.values.name}
                required
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="type">
                Type
                <span className={classes.labelHintWrapper}>
                  Organization Type
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="type"
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="founded">
                Founded
                <span className={classes.labelHintWrapper}>Founding Date</span>
              </label>
              <input
                type="date"
                className="form-control"
                id="founded"
                name="founded"
                value={formik.values.founded}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="description">
                Description
                <span className={classes.labelHintWrapper}>
                  Organization Description
                </span>
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="website">
                Website
                <span className={classes.labelHintWrapper}>
                  Organization Website
                </span>
              </label>
              <input
                type="url"
                className="form-control"
                id="website"
                name="website"
                value={formik.values.website}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="phone">
                Phone
                <span className={classes.labelHintWrapper}>Contact Phone</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="email">
                Email
                <span className={classes.labelHintWrapper}>Contact Email</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="address">
                Address
                <span className={classes.labelHintWrapper}>
                  Organization Address
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="city">
                City
                <span className={classes.labelHintWrapper}>City</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="state">
                State/Province
                <span className={classes.labelHintWrapper}>State/Province</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="country">
                Country
                <span className={classes.labelHintWrapper}>Country</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="postalCode">
                ZIP/Postal Code
                <span className={classes.labelHintWrapper}>
                  ZIP/Postal Code
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                name="postalCode"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="logo">
                Logo
                <span className={classes.labelHintWrapper}>
                  Organization Logo
                </span>
              </label>
              <input
                type="file"
                className="form-control"
                id="logo"
                name="logo"
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="ceo">
                CEO/President
                <span className={classes.labelHintWrapper}>
                  CEO/President Name
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="ceo"
                name="ceo"
                value={formik.values.ceo}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="numEmployees">
                Number of Employees
                <span className={classes.labelHintWrapper}>
                  Total Employees
                </span>
              </label>
              <input
                type="number"
                className="form-control"
                id="numEmployees"
                name="numEmployees"
                value={formik.values.numEmployees}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="revenue">
                Revenue
                <span className={classes.labelHintWrapper}>Annual Revenue</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="revenue"
                name="revenue"
                value={formik.values.revenue}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="industry">
                Industry
                <span className={classes.labelHintWrapper}>
                  Industry Sector
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="industry"
                name="industry"
                value={formik.values.industry}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="parentOrganization">
                Parent Organization
                <span className={classes.labelHintWrapper}>
                  Parent Organization
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="parentOrganization"
                name="parentOrganization"
                value={formik.values.parentOrganization}
                onChange={formik.handleChange}
              />
            </div>

            <div className={classes.column}>
              <label htmlFor="dateUpdated">
                Date Updated
                <span className={classes.labelHintWrapper}>
                  Last Updated Date
                </span>
              </label>
              <input
                type="date"
                className="form-control"
                id="dateUpdated"
                name="dateUpdated"
                value={formik.values.dateUpdated}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className={classes.centeredRow}>
          <ButtonComponent
            type="submit"
            disabled={formik.isSubmitting}
            style={{ width: "100%", height: "50px" }}
          >
            <h4>
              <b>Submit</b>
            </h4>
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default OrganisationForm;
