import * as Yup from "yup";
function UseFormValidation() {
  // IPv4 validation regex
  const ipv4Regex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // Validation schema
  const VALIDATION_SCHEMA_ADD_NETWORK = Yup.object().shape({
    inteface: Yup.string().required("Interface is required"),
    ip_server: Yup.string()
      .required("DHCP IP is required")
      .matches(ipv4Regex, "Must be a valid IPv4 address"),
    ip_start: Yup.string()
      .required("IP allocated start is required")
      .matches(ipv4Regex, "Must be a valid IPv4 address"),
    ip_end: Yup.string()
      .required("IP allocated end is required")
      .matches(ipv4Regex, "Must be a valid IPv4 address"),
    default_gateway: Yup.string()
      .required("IP gateway is required")
      .matches(ipv4Regex, "Must be a valid IPv4 address"),
    default_boot: Yup.string().required("Default boot option is required"),
    dns: Yup.array()
      .of(
        Yup.string()
          .required("DNS server is required")
          .matches(ipv4Regex, "Must be a valid IPv4 address")
      )
      .min(1, "At least one DNS server is required"),
  });

  const VALIDATION_SCHEMA_ADD_MACHINE = Yup.object({
    name: Yup.string().required("Name is required"),
    ip: Yup.string()
      .matches(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/, "Invalid IP address")
      .required("IP is required"),
    mac: Yup.string()
      .matches(
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
        "Invalid MAC address"
      )
      .required("MAC is required"),
    ip2: Yup.string().matches(
      /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/,
      "Invalid IP address"
    ),
    images: Yup.array().min(1, "At least one image is required"),
    bootMethod: Yup.string().required("Boot method is required"),
    room: Yup.string().required("Room is required"),
  });

  const VALIDATION_SCHEMA_ADD_VM = Yup.object({
    name: Yup.string()
      .required("VM name is required")
      .min(3, "Name must be at least 3 characters"),
    ip: Yup.string().required("IP is required"),
    image: Yup.string().required("Please select an image"),
    cpu: Yup.string().required("CPU configuration is required"),
    ram: Yup.string().required("RAM configuration is required"),
  });
  return {
    VALIDATION_SCHEMA_ADD_NETWORK,
    VALIDATION_SCHEMA_ADD_MACHINE,
    VALIDATION_SCHEMA_ADD_VM,
  };
}

export default UseFormValidation;
