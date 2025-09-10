import React from "react";
import { ChevronDown, X, Package } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UseInitialValues from "../../../../hooks/use-inital-values";
import UseFormValidation from "../../../../hooks/use-form-validation";
import { useNavigate } from "react-router-dom";

function CreateVirtualMachine() {
  const navigate = useNavigate();

  // Initial form values

  const { INITIAL_VALUES_ADD_VM } = UseInitialValues();

  // Validation schema
  const { VALIDATION_SCHEMA_ADD_VM } = UseFormValidation();

  const imageOptions = [
    { value: "", label: "Select an image" },
    { value: "Windows 11 PRO", label: "Windows 11 PRO" },
    { value: "Windows 10 PRO", label: "Windows 10 PRO" },
    { value: "Ubuntu 20.04 LTS", label: "Ubuntu 20.04 LTS" },
    { value: "CentOS 8", label: "CentOS 8" },
    { value: "Debian 11", label: "Debian 11" },
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("VM Created:", values);

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      // Handle success/redirect here
      alert("VM created successfully!");
    }, 2000);
  };

  const handleCancel = () => {
    console.log("VM creation cancelled");
    navigate("/admin-panel/machines/virtual-machines");
    // Handle cancel action - could close modal or navigate away
  };

  return (
    <div className="min-h-screen  text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Formik
          initialValues={INITIAL_VALUES_ADD_VM}
          validationSchema={VALIDATION_SCHEMA_ADD_VM}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting, setFieldValue }) => (
            <Form>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12  rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Package size={20} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-white">
                      Create VM
                    </h1>
                    <p className="text-gray-400 text-sm">Limit 1/3</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X size={20} />
                </button>
              </div>

              {/* VM Settings Card */}
              <div className="backdrop-blur-sm bg-[rgba(19,22,27,1)] rounded-xl border border-white/10 p-6 shadow-2xl">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-white mb-2">
                    VM Settings
                  </h2>
                  <p className="text-gray-400 text-sm">
                    You can create only one VM for image
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium block">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 ${
                        errors.name && touched.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/10 focus:border-white/30"
                      }`}
                      placeholder="Enter VM name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* IP Field */}
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium block">
                      IP
                    </label>
                    <Field
                      type="text"
                      name="ip"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 ${
                        errors.ip && touched.ip
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/10 focus:border-white/30"
                      }`}
                      placeholder="Enter IP"
                    />
                    <p className="text-gray-400 text-xs">
                      Virtual Network 172.0.0.XXX
                    </p>
                    <ErrorMessage
                      name="ip"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* Image Select */}
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium block">
                      Image
                    </label>
                    <div className="relative">
                      <Field
                        as="select"
                        name="image"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 appearance-none cursor-pointer ${
                          errors.image && touched.image
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                      >
                        {imageOptions.map((option) => (
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
                      name="image"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* CPU Field */}
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium block">
                      CPU
                    </label>
                    <Field
                      type="text"
                      name="cpu"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 ${
                        errors.cpu && touched.cpu
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/10 focus:border-white/30"
                      }`}
                      placeholder="Enter CPU configuration"
                    />
                    <ErrorMessage
                      name="cpu"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* RAM Field */}
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium block">
                      RAM
                    </label>
                    <Field
                      type="text"
                      name="ram"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 ${
                        errors.ram && touched.ram
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/10 focus:border-white/30"
                      }`}
                      placeholder="Enter RAM configuration"
                    />
                    <ErrorMessage
                      name="ram"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* Disks Access Section */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-gray-300 text-sm font-medium mb-2">
                        Disks Access
                      </h3>
                      <p className="text-gray-400 text-xs">
                        Disks that machine can write on them
                      </p>
                    </div>

                    {/* Data1 Toggle */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Data1</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFieldValue("data1Enabled", !values.data1Enabled)
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                          values.data1Enabled ? "bg-green-600" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            values.data1Enabled
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Data2 Toggle */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Data2</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFieldValue("data2Enabled", !values.data2Enabled)
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                          values.data2Enabled ? "bg-green-600" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            values.data2Enabled
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {isSubmitting ? "Creating..." : "Create"}
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

export default CreateVirtualMachine;
