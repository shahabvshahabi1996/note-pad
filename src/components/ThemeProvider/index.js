import React from "react";
import { connect } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LightTheme from "../../theme/light";
import DarkTheme from "../../theme/dark";
import { IntlProvider } from "react-intl";
import AppLocales from "../../lang";
import PropTypes from "prop-types";

const ThemeProvider = ({ children, settings }) => {
  let theme = settings.theme === "light" ? LightTheme : DarkTheme;
  let lang = settings.lang;
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <IntlProvider
        locale={AppLocales[lang].locale}
        messages={AppLocales[lang].messages}
      >
        {children}
      </IntlProvider>
    </MuiThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(ThemeProvider);
