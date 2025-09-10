import { ChevronDown, Plus, Trash2 } from "lucide-react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import UseInitialValues from "../../../../hooks/use-inital-values";
import UseFormValidation from "../../../../hooks/use-form-validation";

// IPv4 validation regex

function Network() {
  const bootOptions = [
    { value: "", label: "Select boot option" },
    { value: "ipxe.efi", label: "ipxe.efi" },
    { value: "netboot.xyz.efi", label: "netboot.xyz.efi" },
  ];

  // Initial form values
  const { INITIAL_VALUES_ADD_NETWORK } = UseInitialValues();
  const { VALIDATION_SCHEMA_ADD_NETWORK } = UseFormValidation();

  const handleCheck = (values) => {
    console.log("Check - Form data:", values);
    alert("Network check initiated!");
  };

  const handleSync = (values) => {
    console.log("Sync - Form data:", values);
    alert("Network sync initiated!");
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values);

    // call endpoint here
    // body is values

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-8">
        <Formik
          initialValues={INITIAL_VALUES_ADD_NETWORK}
          validationSchema={VALIDATION_SCHEMA_ADD_NETWORK}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting, isValid }) => (
            <Form>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-[500] text-white mb-2">
                    Network
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => handleCheck(values)}
                    disabled={!isValid}
                    className={`flex items-center space-x-2 px-4 py-2 border font-medium rounded-lg backdrop-blur-sm transition-all duration-300 ${
                      isValid
                        ? "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                        : "bg-gray-600/30 border-gray-600/50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Check</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSync(values)}
                    disabled={!isValid}
                    className={`flex items-center space-x-2 px-4 py-2 border font-medium rounded-lg backdrop-blur-sm transition-all duration-300 ${
                      isValid
                        ? "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                        : "bg-gray-600/30 border-gray-600/50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>Sync</span>
                  </button>
                </div>
              </div>

              {/* Service Settings Section */}
              <div className="backdrop-blur-sm  rounded-xl border border-white/10 p-4 sm:p-6 lg:p-8 shadow-2xl">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Service Settings
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Manage your server machine network
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* DHCP IP Field */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <label className="text-gray-300 text-sm font-medium w-full sm:w-32 lg:w-40 flex-shrink-0 pt-2">
                      DHCP IP *
                    </label>
                    <div className="w-full sm:flex-1">
                      <Field
                        type="text"
                        name="ip_server"
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-sm sm:text-base ${
                          errors.ip_server && touched.ip_server
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                        placeholder="0.0.0.0"
                      />
                      <ErrorMessage
                        name="ip_server"
                        component="div"
                        className="text-red-400 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* IP Allocated Start */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <label className="text-gray-300 text-sm font-medium w-full sm:w-32 lg:w-40 flex-shrink-0 pt-2">
                      IP allocated start *
                    </label>
                    <div className="w-full sm:flex-1">
                      <Field
                        type="text"
                        name="ip_start"
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-sm sm:text-base ${
                          errors.ip_start && touched.ip_start
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                        placeholder="10.0.0.101"
                      />
                      <ErrorMessage
                        name="ip_start"
                        component="div"
                        className="text-red-400 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* IP Allocated End */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <label className="text-gray-300 text-sm font-medium w-full sm:w-32 lg:w-40 flex-shrink-0 pt-2">
                      IP allocated end *
                    </label>
                    <div className="w-full sm:flex-1">
                      <Field
                        type="text"
                        name="ip_end"
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-sm sm:text-base ${
                          errors.ip_end && touched.ip_end
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                        placeholder="10.0.0.254"
                      />
                      <ErrorMessage
                        name="ip_end"
                        component="div"
                        className="text-red-400 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* IP Gateway */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <label className="text-gray-300 text-sm font-medium w-full sm:w-32 lg:w-40 flex-shrink-0 pt-2">
                      IP gateway *
                    </label>
                    <div className="w-full sm:flex-1">
                      <Field
                        type="text"
                        name="default_gateway"
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-sm sm:text-base ${
                          errors.default_gateway && touched.default_gateway
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                        placeholder="10.0.0.1"
                      />
                      <ErrorMessage
                        name="default_gateway"
                        component="div"
                        className="text-red-400 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* Default Boot Select */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                    <label className="text-gray-300 text-sm font-medium w-full sm:w-32 lg:w-40 flex-shrink-0 pt-2">
                      Default Boot *
                    </label>
                    <div className="w-full sm:flex-1">
                      <div className="relative">
                        <Field
                          as="select"
                          name="default_boot"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border rounded-lg text-white backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-sm sm:text-base appearance-none cursor-pointer ${
                            errors.default_boot && touched.default_boot
                              ? "border-red-500 focus:border-red-500"
                              : "border-white/10 focus:border-white/30"
                          }`}
                        >
                          {bootOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="bg-gray-800 text-white"
                            >
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        <ChevronDown
                          size={16}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                      <ErrorMessage
                        name="default_boot"
                        component="div"
                        className="text-red-400 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* DNS Section */}
                  <FieldArray name="dns">
                    {({ push, remove }) => (
                      <div className="flex flex-col gap-2 sm:gap-4">
                        <div className="flex items-center justify-between">
                          <label className="text-gray-300 text-sm font-medium">
                            DNS Servers *
                          </label>
                          <button
                            type="button"
                            onClick={() => push("")}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                          >
                            <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
                              <Plus size={12} />
                            </div>
                            Add DNS
                          </button>
                        </div>

                        <div className="space-y-3">
                          {values.dns.map((_, index) => (
                            <div
                              key={index}
                              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6"
                            >
                              <label className="text-gray-400 text-xs font-medium w-full sm:w-32 lg:w-40 flex-shrink-0 pt-2">
                                DNS {index + 1}
                              </label>
                              <div className="w-full sm:flex-1">
                                <div className="flex gap-2">
                                  <div className="flex-1">
                                    <Field
                                      type="text"
                                      name={`dns.${index}`}
                                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 text-sm sm:text-base ${
                                        errors.dns?.[index] &&
                                        touched.dns?.[index]
                                          ? "border-red-500 focus:border-red-500"
                                          : "border-white/10 focus:border-white/30"
                                      }`}
                                      placeholder={`DNS server ${index + 1}`}
                                    />
                                  </div>
                                  {values.dns.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                      title="Remove DNS server"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  )}
                                </div>
                                <ErrorMessage
                                  name={`dns.${index}`}
                                  component="div"
                                  className="text-red-400 text-xs mt-1"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </FieldArray>
                </div>

                {/* Submit Button (Optional) */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isValid && !isSubmitting
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? "Saving..." : "Save Configuration"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Network;
