function UseInitialValues() {
  const INITIAL_VALUES_ADD_NETWORK = {
    inteface: "main-bond",
    ip_server: "",
    ip_start: "",
    ip_end: "",
    default_gateway: "",
    default_boot: "",
    dns: [""],
  };

  const INITIAL_VALUES_ADD_MACHINE = {
    name: "PC02",
    ip: "192.168.1.102",
    mac: "02:1A:2B:3C:4D:5E",
    ip2: "192.168.1.101",
    images: [],
    bootMethod: "UEFI",
    room: "Room A",
  };

  const INITIAL_VALUES_ADD_VM = {
    name: "VMwindows",
    ip: "PC01",
    image: "Windows 11 PRO",
    cpu: "PC01",
    ram: "PC01",
    data1Enabled: true,
    data2Enabled: true,
  };
  return {
    INITIAL_VALUES_ADD_NETWORK,
    INITIAL_VALUES_ADD_MACHINE,
    INITIAL_VALUES_ADD_VM,
  };
}

export default UseInitialValues;
