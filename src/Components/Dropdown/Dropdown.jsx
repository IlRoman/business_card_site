import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import arrow from "../../assets/icons/arrow.png";
import "./dropdown.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const defaultOptions = [{ title: "no options", data: "no options" }];

const CustomDropdown = ({
  placeholder,
  formData,
  value,
  onChange,
  options,
  isSearch = true,
  autoComplete,
  disabled = false,
  isCancelButton = false,
  selectVariant = "bottom", // bottom | top
  label,
  labelColor = "#000",
  translate = false,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(null);
  const [currentOptions, setCurrentOptions] = useState(
    options || defaultOptions
  );
  const ref = useRef();
  const { t } = useTranslation();

  // set options by search
  useEffect(() => {
    if (options && options.length) {
      if (search) {
        setCurrentOptions(
          options.filter((elem) => elem.title.includes(search))
        );
      } else setCurrentOptions(options);
    }
  }, [options, search]);

  // close when click outside
  useClickOutside(ref, () => {
    setSearch(null);
    if (open) setOpen(false);
  });

  const handleChange = (elem) => {
    setSearch(null);
    setOpen(false);
    onChange(elem);
  };

  const handleCancelOption = (e) => {
    e.stopPropagation();
    setSearch(null);
    setOpen(false);
    onChange("");
  };

  const onOpen = () => setOpen((prev) => !prev);

  const getValue = () =>
    value.title ? (translate ? t(value.title) : value.title) : "";

  const getSearch = () => {
    if (search) return search;
    if (search === null) return getValue();
    if (search === "") return "";
    return getValue();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // reverse options if dropdown variant is 'top'
  const getOptionsOrder = () => {
    let arr = [...currentOptions];
    if (selectVariant === "top") {
      arr = arr.reverse();
    } else return arr;
  };

  const inputContainerClasses = classNames(
    "input-container",
    formData?.hasError && formData?.touched && "input-container_error"
  );
  const arrowClasses = classNames("arrow", open && "arrow_up");
  const selectClasses = classNames("select", selectVariant);

  return (
    <div className="custom-dropdown" ref={ref}>
      {/* label above the input */}
      {label && (
        <div
          className="label"
          onClick={onOpen}
          style={{ color: labelColor || "#00" }}
        >
          {label}
        </div>
      )}

      <div className={inputContainerClasses} onClick={onOpen}>
        {isSearch ? (
          <input
            className="input"
            placeholder={search !== "" ? placeholder : ""}
            disabled={disabled}
            type="text"
            value={getSearch() === "no options" ? "" : getSearch()}
            onChange={handleSearch}
            autoComplete={autoComplete === true ? "on" : "none"}
            style={{
              width: isCancelButton ? "calc(100% - 50px)" : "calc(100% - 25px)",
              color: value?.color || "#000",
            }}
          />
        ) : (
          <div className="input" style={{ color: value?.color || "#000" }}>
            {!value || value.title === "no options"
              ? placeholder
              : translate
              ? t(value.title)
              : value.title}
          </div>
        )}

        {/* cancel button */}
        {isCancelButton && value && (
          <div className="icon-container">
            <div className="cancel-options" onClick={handleCancelOption}>
              &#10006;
            </div>
          </div>
        )}

        {/* arrow icon */}
        <div className="icon-container">
          <img className={arrowClasses} src={arrow} alt="arrow" />
        </div>
      </div>

      {open && (
        <div className={selectClasses}>
          {currentOptions.length ? (
            getOptionsOrder().map((option) => {
              return (
                <div
                  key={option.title}
                  className="select__option"
                  onClick={() => handleChange(option)}
                  style={{ color: option.color || "#000" }}
                >
                  {translate ? t(option.title) : option.title}
                </div>
              );
            })
          ) : (
            <div className="select__option">{t("no results")}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
