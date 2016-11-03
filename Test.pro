QT += core gui
TEMPLATE = app
CONFIG += console c++11
CONFIG -= app_bundle



SOURCES += main.cpp \
    drzewo.cpp \
    testdialog.cpp

HEADERS += \
    drzewo.h \
    testdialog.h

FORMS += \
    testdialog.ui
